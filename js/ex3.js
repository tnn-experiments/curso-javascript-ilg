// Folha de Exercícios no 3
// --------------------------------


// Exercício 1
// --------------------------------
function converte_celsius_para_fahrenheit(celsius) {
    var resultado_fahrenheit = (9 * celsius / 5) + 32;
    return resultado_fahrenheit;
};

document.getElementById('converter').onclick = function() {
    var valorTemp = document.getElementById('temp_celsius').value;
    var fahrTemp = document.getElementById('temp_fahr');
    var resultado = converte_celsius_para_fahrenheit(valorTemp);
    fahrTemp.innerHTML = resultado;
};

// Exercício 2
// --------------------------------
var anoPrimeiraCopa = 1930;
var anoUltimaCopa = 2018;
var listagemAnosCopa = document.getElementById('anos_copa');

listagemAnosCopa.innerHTML = '';

for(var i = anoPrimeiraCopa; i <= anoUltimaCopa; i+=4) {
    listagemAnosCopa.innerHTML += '<li>' + i + '</li>';
}

// Exercício 3
// --------------------------------

document.getElementById('calcular').onclick = function() {
    var nota1 = parseFloat( document.getElementById('nota1').value );
    var nota2 = parseFloat( document.getElementById('nota2').value );
    var numFaltas = parseFloat( document.getElementById('n_faltas').value );

    var media = (nota1 + nota2) / 2;
    var freqMinima = 14;

    console.log(media);

    if(media >= 6.5 && numFaltas >= freqMinima) {
        document.getElementById('result').innerHTML = 'Aprovado';   
    } else if(media >= 6.5 && numFaltas <= freqMinima) {
        document.getElementById('result').innerHTML = 'Reprovado por n de faltas';           
    } else {
        document.getElementById('result').innerHTML = 'Totalmente reprovado';   
    }
};
