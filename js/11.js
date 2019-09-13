// Funções
// ------------

// Exemplo 1
function soma_numeros() {
    var x = 5;
    var y = 2;
    var soma = x + y;

    console.log(soma);
}

soma_numeros();

// Exemplo 2
function soma_args(num1,num2) {
    var soma = num1 + num2;
    console.log(soma);
}

soma_args(10,25);
soma_args(1000,375);

var n1 = 50;
var n2 = 30;

soma_args(n1,n2);

// Exemplo 3
function valor_imc(peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
}

var peso = parseFloat(document.getElementById("peso").innerHTML);
var altura = parseFloat(document.getElementById("altura").innerHTML);
var resultado = valor_imc(peso,altura);

document.getElementById("imc").innerHTML = resultado.toFixed(2);