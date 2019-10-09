// jQuery - Efeitos
// --------------------------------

// exemplo utiliando callback
$('#botao-esconder').click(function(){
    $(this).hide(1000, function(){
        $('#texto-escondido').show();
    });
});

// exemplo 2
$('#toggle-tab').click(function(){
    // $('#tab-content').toggle();
    // $('#tab-content').fadeToggle();
    $('#tab-content').slideToggle();
    $('#toggle-tab').toggleClass('flip');
});