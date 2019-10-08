// jQuery - Eventos
// ------------------------
$(document).ready(function(){

    $('#nome').keyup(function(){
        var conteudo = $('#nome').val();

        if (conteudo) {
            $('#confirmar').css('display', 'initial');
        } else {
            $('#confirmar').css('display', 'none');
        }    
    });

});

