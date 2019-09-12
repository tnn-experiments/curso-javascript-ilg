// 10 Trabalhando com o DOM

// Exemplo 1
// -------------

// Pega o valor do elemento com ID e atribui a variavel
var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
// Atribui o valor capturado a outro elemento
document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

// Exemplo 2
// -------------
var conteudo = document.getElementById("caixa_azul").innerHTML;
document.getElementById("caixa_azul").innerHTML = "<h1>" + conteudo + "</h1>";