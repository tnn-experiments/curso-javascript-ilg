
$(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo

// http://dataservice.accuweather.com/currentconditions/v1/45881?apikey=gRTwpZJ2ZR05SIgO9Z2mWenYRu8sMkH7&language=pt-br
// http://www.geoplugin.net/json.gp?ip=xx.xx.xx.xx

var accuweatherAPIKey = 'gRTwpZJ2ZR05SIgO9Z2mWenYRu8sMkH7';
var weatherObject = {
    cidade: '',
    estado: '',
    pais: '',
    temperatura: '',
    texto_clima: '',
    icone_clima: ''
}

function preencherClimaAgora(cidade, estado, pais, temperatura, texto_clima, icone_clima){

    var texto_local = cidade + ', ' + estado + '. ' + pais;

    $('#texto_local').text(texto_local);
    $('#texto_clima').text(texto_clima);
    $('#texto_temperatura').html( String(temperatura) + '&deg;' );
    $('#icone_clima').css('background-image', 'url("' + weatherObject.icone_clima + '")');

}

function gerarGrafico(horas, temperaturas){

    Highcharts.chart('hourly_chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Temperatura Hora a hora'
        },
        xAxis: {
            categories: horas
        },
        yAxis: {
            title: {
                text: 'Temperatura (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            showInLegend: false,
            data: temperaturas
        }]
    });

}

function pegarPrevisaoHoraHora(localCode) {
    // http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/127164?apikey=gRTwpZJ2ZR05SIgO9Z2mWenYRu8sMkH7&language=pt-br&metric=true

    $.ajax({
        url: 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + localCode + '?apikey=' + accuweatherAPIKey + '&language=pt-br&metric=true',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log('pegarPrevisaoHoraHora', data);

            var horarios = [];
            var temperaturas = [];

            for(var a = 0; a < data.length; a++) {

                var hora = new Date( data[a].DateTime ).getHours();
                horarios.push( String(hora) + 'h' );

                temperaturas.push( data[a].Temperature.Value );

                gerarGrafico(horarios, temperaturas);

            }
        },
        error: function(){
            console.log('erro');
        }
    });    
}

function preencherPrevisao5Dias(previsoes) {
    $('#info_5dias').html('');
    var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    for(a = 0; a < previsoes.length; a++) {
        var dataHoje = new Date(previsoes[a].Date);
        var dia_semana = diasSemana[ dataHoje.getDay() ];
        var iconNumber = previsoes[a].Day.Icon <= 9 ? '0' + String(previsoes[a].Day.Icon) : String(previsoes[a].Day.Icon);

        iconeClima = 'https://developer.accuweather.com/sites/default/files/' + iconNumber + '-s.png';   
        maxima = String(previsoes[a].Temperature.Maximum.Value);     
        minima = String(previsoes[a].Temperature.Minimum.Value);  
        
        elementoHTMLDia = '<div class="day col">';
        elementoHTMLDia +=  '<div class="day_inner">';
        elementoHTMLDia +=      '<div class="dayname">';
        elementoHTMLDia +=          dia_semana;
        elementoHTMLDia +=      '</div>';
        elementoHTMLDia +=      '<div style="background-image: url(\'' + iconeClima + '\')" class="daily_weather_icon"></div>'
        elementoHTMLDia +=      '<div class="max_min_temp">';
        elementoHTMLDia +=          minima + '&deg; / ' + maxima + '&deg;';
        elementoHTMLDia +=       '</div>';
        elementoHTMLDia +=  '</div>';
        elementoHTMLDia +='</div>';

        $('#info_5dias').append(elementoHTMLDia);
        elementoHTMLDia = '';
    }
}

function pegarPrevisao5Dias(localCode){
    // http://dataservice.accuweather.com/forecasts/v1/daily/5day/127164?apikey=gRTwpZJ2ZR05SIgO9Z2mWenYRu8sMkH7&language=pt-br

    $.ajax({
        url: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + localCode + '?apikey=' + accuweatherAPIKey + '&language=pt-br&metric=true',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log('pegarPrevisao5Dias', data);
            $('#texto_max_min').html( String(data.DailyForecasts[0].Temperature.Minimum.Value) + '&deg; / ' + String(data.DailyForecasts[0].Temperature.Maximum.Value) + '&deg;' );
            preencherPrevisao5Dias(data.DailyForecasts);
        },
        error: function(){
            console.log('erro');
        }
    });
    
}

function pegarTempoAtual(localCode) {

    $.ajax({
        url: 'http://dataservice.accuweather.com/currentconditions/v1/' + localCode + '?apikey=' + accuweatherAPIKey + '&language=pt-br',
        type: 'GET',
        dataType: 'json',
        success: function(data){

            weatherObject.temperatura = data[0].Temperature.Metric.Value;
            weatherObject.texto_clima = data[0].WeatherText;

            var iconNumber = data[0].WeatherIcon <= 9 ? '0' + String(data[0].WeatherIcon) : String(data[0].WeatherIcon);

            weatherObject.icone_clima = 'https://developer.accuweather.com/sites/default/files/' + iconNumber + '-s.png';

            preencherClimaAgora(weatherObject.cidade, weatherObject.estado, weatherObject.pais, weatherObject.temperatura, weatherObject.texto_clima, weatherObject.icone_clima);
        },
        error: function(){
            console.log('erro');
        }
    });

}

function pegarLocalUsuario(lat, long) {

    $.ajax({
        url: 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + accuweatherAPIKey + '&q=' + lat + '%2C' + long + '&language=pt-br',
        type: 'GET',
        dataType: 'json',
        success: function(data){

            try {
                weatherObject.cidade = data.ParentCity.LocalizedName;
            } 
            catch {
                weatherObject.cidade = data.LocalizedName;
            }

            weatherObject.estado = data.AdministrativeArea.LocalizedName;
            weatherObject.pais = data.Country.LocalizedName;

            var localCode = data.Key; 
            
            pegarTempoAtual(localCode);
            pegarPrevisao5Dias(localCode);
            pegarPrevisaoHoraHora(localCode);
        },
        error: function(){
            console.log('erro');
        }
    });

}

function pegarCoordenadasDoIp(){

    var lat_padrao = -22.981361;
    var long_padrao = -43.223176;
 
    $.ajax({
        
        url: 'http://www.geoplugin.net/json.gp',
        type: 'GET',
        dataType: 'json',
        success: function(data){

            console.log('pegarCoordenadasDoIp');
        
            if(data.geoplugin_latitude && data.geoplugin_longitude) {
                pegarLocalUsuario(data.geoplugin_latitude, data.geoplugin_longitude);
            } else {
                pegarLocalUsuario(lat_padrao, long_padrao);
            }
        
        },
        error: function(){
            console.log('erro');
            pegarLocalUsuario(lat_padrao, long_padrao);
        }
    });    

}

pegarCoordenadasDoIp();

});