
$(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo

// http://dataservice.accuweather.com/currentconditions/v1/45881?apikey=gRTwpZJ2ZR05SIgO9Z2mWenYRu8sMkH7&language=pt-br
// http://www.geoplugin.net/json.gp?ip=xx.xx.xx.xx

var accuweatherAPIKey = 'gRTwpZJ2ZR05SIgO9Z2mWenYRu8sMkH7';

function pegarTempoAtual(localCode) {

    $.ajax({
        url: 'http://dataservice.accuweather.com/currentconditions/v1/' + localCode + '?apikey=' + accuweatherAPIKey + '&language=pt-br',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data);
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
            var localCode = data.Key; 
            pegarTempoAtual(localCode);
        },
        error: function(){
            console.log('erro');
        }
    });

}

function pegarCoordenadasDoIp(){
 
    $.ajax({
        var lat_padrao = -22.981361;
        var long_padrao = -43.223176;
        
        url: 'http://www.geoplugin.net/json.gp',
        type: 'GET',
        dataType: 'json',
        success: function(data){
        
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