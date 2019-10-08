// jQuery - Manipulação de classes CSS
// --------------------------------------

$('#adicionar_classe').on('click', function(){
    $('#paragrafo-classes').addClass('styling');
});

$('#remover_classe').on('click', function(){
    $('#paragrafo-classes').removeClass('styling');
});

$('#alternar_classe').on('click', function(){
    $('#paragrafo-classes').toggleClass('styling');
});