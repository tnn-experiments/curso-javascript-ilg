// Formulários
// ---------------------

// Select Box
document.getElementById('mostrar_opcao').onclick = function() {

    var campo_select = document.getElementById('options');
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;

    // var valor_selecionado = document.getElementById('options').value;
    // document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;
};

// Radio Buttons
document.getElementById('mostrar_radio').onclick = function() {

    var radio = document.getElementsByName('genero');
    var radio_selected;

    for(var a = 0; a < radio.length; a++) {
        if(radio[a].checked) {
            radio_selected = radio[a].value;
            break;
        }
    }

    document.getElementById('radio_selecionado').innerHTML = radio_selected;

}

// Check Boxes
document.getElementById('mostrar_check').onclick = function() {
    
    document.getElementById('check_selecionado').innerHTML = '';
    var check = document.getElementsByName('interesse');
    
    for (var b = 0; b < check.length; b++) {
        if (check[b].checked) {
            document.getElementById('check_selecionado').innerHTML += '<li>' + check[b].value + '</li>';
        }
    }

}

// Date
document.getElementById('mostrar_data').onclick = function() {

    var data_select = document.getElementById('data_evento').value;
    var data_completa = new Date(data_select);
    document.getElementById('data_selecionada').innerHTML = data_completa;

}