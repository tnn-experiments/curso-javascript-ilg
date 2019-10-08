// jQuery - Formulários
// --------------------------


// input
var conteudo_input = $('#campo_nome').val();
console.log(conteudo_input);

// Select Box
var valor_selecionado = $('#options').val();
console.log(valor_selecionado);

var texto_selecionado = $('#options').find(":selected").text();
console.log(texto_selecionado);

$("#options").change(function(){
    var novo_selecionado = $('#options').find(":selected").text();
    console.log(novo_selecionado);
});

// Radio Buttons
var valor_radio_selecionado = $("input[name='genero']:checked").val();
console.log(valor_radio_selecionado);

var texto_radio_selecionado = $("input[name='genero']:checked").parent('span').text();
console.log(texto_radio_selecionado);

// CheckBoxes
$("input[name='interesse']").change(function() {

    var checkboxes_selecionados = $("input[name='interesse']:checked");
    var textos = [];
    
    $.each(checkboxes_selecionados, function( index, value ) {
        
        textos.push( $(value).parent("span").text() );
    
    });
    
    console.log(textos);
    
});