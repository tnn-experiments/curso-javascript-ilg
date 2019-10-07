// jQuery - Manipulação do conteúdo HTML
// ---------------------------------------

// exemplo 1
var conteudo_html = $('#paragrafo-html').html();
console.log(conteudo_html);

$('#paragrafo-html').html('Mudar o conteúdo para parágrafo');

conteudo_html = $('#paragrafo-html').html();
console.log(conteudo_html);

// exemplo 2
var url_link = $('#paragrafo-link').attr('href');
console.log(url_link);

$('#paragrafo-link').attr('href', 'http://www.udemy.com');

url_link = $('#paragrafo-link').attr('href');
console.log(url_link);

// exemplo 3
$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});

// exemplo 4

// Remover o conteúdo, mantendo o elemento:
$("#paragrafo-empty").empty();

// Remover o elemento:
$("#paragrafo-empty").remove();