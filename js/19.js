// Loops For e For/In
// ------------------------


// exemplo 1
for (var a = 0; a < 5 ; a++) {
    console.log(a);
} 

// exemplo 2
var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
for (var b = 0; b < alunos.length; b++) {
    console.log( alunos[b] );
}

// exemplo 3
var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'
}

for (var prop in carro) {
    console.log(prop + ': ' + carro[prop]);
}

// exemplo 3
var elementos = document.getElementsByClassName('exemplo');

for (var a = 0; a < elementos.length; a++) {
    elementos[a].style.color = "orange";
    elementos[a].style['font-weight'] = "bold";
}

// exemplo 4
var paragrafos = document.getElementsByTagName('p');

for (var z = 0; z < paragrafos.length; z++) {
    paragrafos[z].style['text-decoration'] = 'underline';
}