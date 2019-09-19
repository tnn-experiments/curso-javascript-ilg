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
    var numMaxFaltas = 6;

    if(media >= 6.5 && numFaltas <= numMaxFaltas) {
        document.getElementById('result').innerHTML = 'Aprovado';   
    } else if(media <= 6.5 && numFaltas <= numMaxFaltas) {
        document.getElementById('result').innerHTML = 'Reprovado por nota';   
    }else if(media >= 6.5 && numFaltas >= numMaxFaltas) {
        document.getElementById('result').innerHTML = 'Reprovado por n de faltas';           
    } else {
        document.getElementById('result').innerHTML = 'Totalmente reprovado';   
    }
};

// Exercício 4
// --------------------------------
var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

var total = 0;
var tBody = document.getElementById('vendas_cursos');
tBody.innerHTML = '';

for(var a = 0; a < vendas_cursos.length; a++) {
    if( !vendas_cursos[a].reembolso ) {
        tBody.innerHTML += '<tr> <td>' + vendas_cursos[a].aluno + '</td> <td>' + vendas_cursos[a].data + '</td> <td>' + vendas_cursos[a].valor + '</td> </tr>'; 
        
        total += vendas_cursos[a].valor;
    }                
}

document.getElementById('total_vendas').innerHTML = '<strong>' + total + '</strong>';