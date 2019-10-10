// AJAX - Request
// ------------------------

var xhttp = new XMLHttpRequest();

// onreadystatechange: monitora a mudança de estado da requisição.
// readyState: número do estado atual da requisição
// status: código do status da requisição
// response text: o texto da resposta da requisição

xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};