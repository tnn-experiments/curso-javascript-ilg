// Folha de Exercícios no 2
// ----------------------------

// questão 1
// ----------------------------
var num_1 = parseFloat( document.getElementById('num_1').innerHTML );
var num_2 = parseFloat( document.getElementById('num_2').innerHTML );
var resultado = num_1 + num_2;

document.getElementById('resultado').innerHTML = '<strong>' + resultado + '</strong>';

// questão 2
// ----------------------------
function converte_celsius_para_fahrenheit(celsius) {
    var resultado_fahrenheit = (9 * celsius / 5) + 32;
    return resultado_fahrenheit;
};

var valor_celsius = document.getElementById('caixa_azul').innerHTML;
document.getElementById('caixa_amarela').innerHTML = converte_celsius_para_fahrenheit(valor_celsius);

// questão 3
// ----------------------------

// array original
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

console.log(grupos);

// array com os 2 últimos elementos 
var grupos_2 = grupos.slice(-2);
console.log(grupos_2);

// array com adição de elementos
grupos.push(["Mariana", "Felipe", "Carla"]);
console.log(grupos);

// questão 4
// ----------------------------

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_avaliacoes' : function(){
        var total = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
        return total;
    },
    'media_avaliacoes': function(){
        var media = ( ((5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas) + (3 * this.n_aval_3_estrelas) + (2 * this.n_aval_2_estrelas) + (1 * this.n_aval_1_estrela)) / ( this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela ) );
        return media;
    }
}





// 4.a
var valor_cat_principal = curso.categoria[0];
document.getElementById('categoria_principal').innerHTML = valor_cat_principal;

// 4.b
var valor_total_aval = curso.total_avaliacoes();
document.getElementById('total_aval').innerHTML = valor_total_aval;

var valor_media_aval = curso.media_avaliacoes().toFixed(2);
document.getElementById('media_aval').innerHTML = valor_media_aval;

// questão 5
// ----------------------------
var ficha = {
    'nome': 'Pedro',
    'sobrenome': 'Gomes',
    'email': 'pedrogomes@gmail.com'
}

function estrutura_ficha(param){
    var tabelaHTML = '<div class="tableBox">';
    tabelaHTML +=       '<table>';
    tabelaHTML +=           '<tr>';
    tabelaHTML +=               '<th>Nome Completo</th>';
    tabelaHTML +=               '<th>Email</th>'; 
    tabelaHTML +=           '</tr>';
    tabelaHTML +=           '<tr>';
    tabelaHTML +=               '<td>'+param.nome+' '+param.sobrenome+'</td>';
    tabelaHTML +=               '<td>'+param.email+'</td>';
    tabelaHTML +=           '</tr>';
    tabelaHTML +=        '</table>';
    tabelaHTML +=   '</div>';

    return tabelaHTML;
}

document.getElementById('tabela').innerHTML = estrutura_ficha(ficha);