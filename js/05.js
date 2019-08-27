// Tipos de dados - numbers
// --------------------------------

var ano_nascimento = 1986;
var preco = 16.99;  // floats devem ser usadas com ponto, nunca com vírgula.
var temperatura = -5;
var numero_grande = 2.2e45; /* números muito grandes podem ser representados em Javascript pela notação exponencial. 
Neste exemplo, este número significa 2.2 x 1045 */

// Aritmética básica
// --------------------------------

var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;

console.log('A média é: ' + media);

// O Objeto Math
// --------------------------------

var potencia = Math.pow(2,4);  /*  Neste caso usamos o método pow do objeto Math, que faz potenciação.
Este método requer duas informações separadas por vírgula entre parênteses: o número base, e a potência.
Isso significa que temos 24, que dá 16. */

var arredonda = Math.round(2.7); // Arredondamento. Resultado: 3

var arredonda_cima = Math.ceil(4.3) // Arredondamento para cima. Resultado: 5

var arredonda_baixo = Math.floor(4.6) // Arredondamento para baixo. Resultado: 4

var raiz = Math.sqrt(36) // Raiz quadrada. Resultado: 6

// Operadores incrementais
// --------------------------------
var increment = 20;
increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
console.log(increment); // O console mostrará 25

// esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

increment = 1;
increment += 5;
console.log(increment); // O console mostrará 6

// podemos também usar *=, /= e -= para multiplicação, divisão e subtração


// Temos operadores incrementais que aumentam (++) ou diminuem (--) o valor de uma variável em 1 unidade.
increment = 10; 

increment++;
console.log(increment);

increment--;
console.log(increment);

// Como converter o tipo de uma variável
// ------------------------------------------

var ddd = 21;
var telefone = 998887655;

var ddd_string = ddd.toString();
var tel_string = telefone.toString();
var telefone_completo = ddd_string + tel_string;

console.log(telefone_completo); // retorna '21998887655'

var idade = '17';
var idade_num = parseInt(idade);
idade_num++;

console.log(idade_num); // O console mostrará 18