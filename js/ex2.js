// Folha de Exercícios no 2
// ----------------------------

// questão 1
var num_1 = parseInt( document.getElementById('num_1').innerHTML );
var num_2 = parseInt( document.getElementById('num_2').innerHTML );
var resultado = num_1 + num_2;

document.getElementById('resultado').innerHTML = '<strong>' + resultado + '</strong>';

// questão 2
function converte_celsius_para_fahrenheit(celsius) {
    var celsius;
    var resultado_fahrenheit;
    
    resultado_fahrenheit = (9 * celsius / 5) + 32;

    return resultado_fahrenheit;
};

var valor_celsius = document.getElementById('caixa_azul').innerHTML;
document.getElementById('caixa_amarela').innerHTML = converte_celsius_para_fahrenheit(valor_celsius);