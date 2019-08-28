// Folha de Exercícios no 1
// ------------------------------

// 1
// ------------------------------
console.log("O arquivo 'ex1.js' está funcionando");

// 2
// ------------------------------
var nome = "Anderson";
var anoNascimento = 1979;
var anoAtual = 2019;
var idade = anoAtual - anoNascimento; 

console.log("Olá, eu me chamo " + nome + ",tenho " + idade + " anos e estou estudando Javascript");

// 3
// ------------------------------
var nome = "Anderson";
var numMatricula = "123456";
var notaP1 = 5.0;
var notaP2 = 8.0;
var media = (notaP1 + notaP2) / 2;

console.log("O aluno " + nome + ", matrícula " + numMatricula + ", obteve a média final " + media);

// 4
// ------------------------------
var celeular = "985027833";
var resultado;

if(celeular.length === 9) {
    resultado = true;
} else {
    resultado = false;
}

console.log("Resultado do teste: " + resultado);

// 5
// ------------------------------
var exponenciacao = Math.pow(32,6);

console.log(exponenciacao);
// 32 X 32 X 32 X 32 X 32 X 32 = 1.073.741.824

// 6
// ------------------------------
// a) var NOME;
// b) var $num1;
// c) var typeof; É uma palavra reservada.
// d) var nome-aluno; Não pode conter traço.
// e) var tentativa_2; 
// f) var 2a_tentativa; Não pode começar com número.
// g) var nome completo; Não pode conter espaço.

// 7
// ------------------------------
var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); // 2525
console.log( (7+5) / numero + 2 ); // 4
console.log(pressao); // undefined
console.log(temperatura); // 40
console.log(typeof pressao); // undefined
console.log(typeof temperatura); // object


// 8
// ------------------------------
var idade = 65;

console.log(idade != 65); // false
console.log(idade >= 65); // true
console.log("65" == idade); // true
console.log(65 !== idade); // false
console.log(typeof (idade > 60)); // boolean
console.log(typeof (idade > 70)); // boolean