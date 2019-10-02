// O evento onChange
// --------------------


// select
document.getElementById('escolaridade').onchange = function() {

    var campo_select = document.getElementById("escolaridade");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

}


// check
var check = document.getElementsByName("lanche");

for (var a = 0;  a < check.length; a++) {

    check[a].onchange = function () {

        document.getElementById("check_selecionado").innerHTML = "";
        
        for (var b = 0;  b < check.length; b++) {
            
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    }  
}