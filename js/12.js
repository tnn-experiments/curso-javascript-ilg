// Arrays
// -------------

// Exemplo 1
var alunos = ["João", "Maria", "José"];
var num_primos = [2, 3, 5, 7, 11, 13];

console.log(alunos.length);
console.log(num_primos[2]);
console.log(num_primos[10]);

// Exemplo 2
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

console.log(grupos.length);
console.log(grupos[1]);
console.log(grupos[1][1]);

// Exemplo 3
alunos = ["João", "Maria", "José", "Fernanda", "Pedro", "Maria"];
console.log(alunos.slice(0, -2)); // remove os 2 ultimos elementos
console.log(alunos.slice(-2)); // exibe somente os 2 ultimos elementos