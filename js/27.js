// Métodos de Tempo
// ***********************


// sintaxe
// window.setTimeout(função, tempo em milisegundos);

// exemplo 1
// console.log('Mensagem 1');

// window.setTimeout(function() {
//     console.log('Mensagem 2');
// }, 3000);

// exemplo 2
document.getElementById('mostrar-loader').onclick = function() {
    document.getElementById('spinner-loader').style.display = 'initial';

    window.setTimeout(function() {
        document.getElementById('spinner-loader').style.display = 'none';
    }, 5000);
};

// exemplo 3
// var count = 0;

// window.setInterval(function() {
//     console.log(count);
//     count++;
// },1000);

// exemplo 4
var count = 0;

var inter = window.setInterval(function() {
    console.log(count);
    count++;

    if(count >= 10) {
        window.clearInterval(inter);
    }
},1000);

// desafio relogio
window.setInterval(function(){
    var hora_atual = new Date();
    var horas = hora_atual.getHours();
    var minutos = hora_atual.getMinutes();
    var segundos = hora_atual.getSeconds();

    function format_time(time) {
        if(time >= 0 && time <= 9) {
            var formatted_time = time.toString();
            formatted_time = '0' + formatted_time;
        } else {
            var formatted_time = time.toString();
        }

        return formatted_time;
    }
    
    document.getElementById('relogio').innerHTML = format_time(horas) + ':' + format_time(minutos) + ':' + format_time(segundos);
},1000);