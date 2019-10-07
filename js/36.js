// jQuery - Loop Each
// -----------------------

// exemplo 1 (Aplicação do loop each em um array)
var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

$.each(lista, function(indice, valor){
    console.log('O elemento de índice [' + indice + '] tem o valor de: ' + valor);
});

// exemplo 2 (Aplicação do loop each em um objeto)
var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};

$.each(pessoa, function( chave, valor ) {
    console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
});

// exemplo 3
var interesses = $('#interesses li');
console.log(interesses);

$.each(interesses, function(indice, valor){
    // console.log(valor);
    // console.log( $(valor).text() );
    console.log('O elemento de índice [' + indice + '] tem o valor de: ' + $(valor).text());
});