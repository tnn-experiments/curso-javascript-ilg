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