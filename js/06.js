// Tipos de dados - booleans
// ---------------------------------------

var teste1 = 20 > 2; // true
var teste2 = 2 >= 2; // true
var teste3 = 5 < 5; // false
var teste4 = 5 <= 10; // true
var teste5 = 20 == 20; // true
var teste6 = 'ivan' == 'joão' // false
var teste7 = 20 === "20"; // false - valor é igual mas o tipo não. O primeiro é número, o segundo é string.
var teste8 = 20 != 10; // true
var teste9 = 10 != 10; // false
var teste10 = "10" !== 10; // true - o tipo não é igual
var teste11 = "9" !== 10; // false - o tipo nem o valor são iguais.


/* 
    Atenção: tome cuidado com comparações de maior e menor com tipos diferentes, por exemplo, números com strings,
    pois este tipo de operação gera resultados inesperados.  
*/

// Como consultar o tipo de uma variável
// ---------------------------------------

var v_string = "teste";
var v_numero = 4.55;
var idade = 21;
var v_boolean = idade > 18 ;

console.log(typeof v_string);  // retorna string
console.log(typeof v_numero);  // retorna number
console.log(typeof v_boolean);  // retorna boolean