// Tipos de dados - Strings

var nome = "João";  // podem ser usadas aspas duplas
var sobrenome = 'Gomes';  // ou aspas simples
var cpf = '111.111.111-11';  
var telefone = "998887655";
var ddd = '21';
var email = 'joao@gmail.com';
var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

console.log('Nome completo: ' + nome + ' ' + sobrenome);
console.log('(' + ddd + ')' + telefone);
console.log('Primeira letra do nome: ' + nome[0]);
console.log('Última letra do nome: ' + nome[3]);
console.log('Número de caracteres do telefone: ' + telefone.length);