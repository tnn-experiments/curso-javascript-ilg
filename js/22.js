// Aninhamento de loops e condicionais
// ------------------------------------


// exemplo 1
var socio = false;
var idade = 25;

if (socio == true || idade >= 65) {
    console.log('O ingresso é grátis');
} else {

    if (idade < 18) {
        console.log('O ingresso custa: R$ 6,00');
    } else {
        console.log('O ingresso custa: R$ 12,00');
    }
} // O console mostrará 'O ingresso custa: R$ 12,00'

// exemplo 2
var funcionarios = [
        
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']
        
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
    }

];

var list_element = document.getElementById('filhos');
list_element.innerHTML = '';

for (var a = 0; a < funcionarios.length; a++) {
    if (funcionarios[a].filhos) {
        
        var lista_filhos = funcionarios[a].filhos;
        
        for (var b = 0; b < lista_filhos.length; b++) {
            list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';
        }
    }
}
