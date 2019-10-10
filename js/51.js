// AJAX - Response
// --------------------

function mostrar_temperatura(dados) {
    var dados_obj = JSON.parse(dados);
    console.log('A temperatura em Londres é de ' + dados_obj.main.temp + ' graus Celsius.')
}

function mostrar_dados(dados) {
    var dados_obj = JSON.parse(dados);
    console.log(dados_obj);
}

function tempo_londres(callback) {
    var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
            
        } 
    };
    xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
    xhttp.send();
}

tempo_londres( mostrar_temperatura );
tempo_londres( mostrar_dados );