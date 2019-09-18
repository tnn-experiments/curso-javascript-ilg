// Condicionais
// ----------------

// if / else if / else
// ---------------------------------------------
var idade = 17;

if (idade < 18) {

    console.log('Menor de idade');

} else {

    console.log('Maior de idade');

} // O console mostrará: 'Menor de idade'

var idade = 18;

if (idade < 18) {

    console.log('Menor de 18');

} else if (idade == 18) {

    console.log('Tem 18 anos');

} else {

    console.log('Maior de 18');

} // O console mostrará: 'Tem 18 anos' 

// Testando múltiplas condições com and e or
// ---------------------------------------------
nota = 7;
faltas = 3;

// Resolução com and: 

if (nota >= 7 && faltas <= 4) {
    console.log( 'O aluno foi aprovado' );
} else {
    console.log( 'O aluno foi reprovado' );
}

// Resolução com or: 

if (nota < 7 || faltas > 4) {
    console.log( 'O aluno foi reprovado' );
} else {
    console.log( 'O aluno foi aprovado' );
}               