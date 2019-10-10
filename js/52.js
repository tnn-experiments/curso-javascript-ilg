// AJAX - jQuery
// ----------------------

function apresentar_dados (data) {

    $('#temp_atual').html(data.main.temp);
    $('#temp_max').html(data.main.temp_max);
    $('#temp_min').html(data.main.temp_min);

}

function pegar_dados (callback) {

    $.ajax({
        url : "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",
        type: "GET",
        dataType: "json",
    }).done(function(data){
        callback(data);        
    }).fail(function(){
        console.log("Erro na requisição");
    });

}

pegar_dados( apresentar_dados );