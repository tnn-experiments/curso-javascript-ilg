// Folha de Exercícios no 2
// ----------------------------

// questão 1
// ----------------------------
var num_1 = parseInt( document.getElementById('num_1').innerHTML );
var num_2 = parseInt( document.getElementById('num_2').innerHTML );
var resultado = num_1 + num_2;

document.getElementById('resultado').innerHTML = '<strong>' + resultado + '</strong>';

// questão 2
// ----------------------------
function converte_celsius_para_fahrenheit(celsius) {
    var celsius;
    var resultado_fahrenheit;
    
    resultado_fahrenheit = (9 * celsius / 5) + 32;

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
        total = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
        return total;
    },
    'media_avaliacoes': function(){
        media = ( (1 * this.n_aval_1_estrela) + (2 * this.n_aval_2_estrelas) + (3 * this.n_aval_3_estrelas) + (4 * this.n_aval_4_estrelas) + (5 * this.n_aval_5_estrelas) / (this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas) + (this.n_aval_4_estrelas) + (this.n_aval_5_estrelas));
        return media;
    }
}

// 4.a
var valor_cat_principal = curso.categoria[0];
document.getElementById('categoria_principal').innerHTML = valor_cat_principal;

// 4.b
var valor_total_aval = curso.total_avaliacoes();
document.getElementById('total_aval').innerHTML = valor_total_aval;

var valor_media_aval = curso.media_avaliacoes();
document.getElementById('media_aval').innerHTML = valor_media_aval;

// questão 5
// ----------------------------
var ficha = {
    'nome': 'Pedro',
    'sobrenome': 'Gomes',
    'email': 'pedrogomes@gmail.com'
}

function estrutura_ficha(param){
    var htmlAbreTr = '<tr>';
    var htmlAbreTd = '<td>';
    var htmlFechaTr = '</tr>';
    var htmlFechaTd = '</td>';
    
    var html1 = htmlAbreTr + htmlAbreTd + 'Nome Completo' + htmlFechaTd + htmlAbreTd + 'Email' + htmlFechaTd + htmlFechaTr;
    var html2 = htmlAbreTr + htmlAbreTd + param.nome + param.sobrenome + htmlFechaTd + htmlAbreTd + param.email + htmlFechaTd + htmlFechaTr;
    var html = html1 + html2;

    return html;
}

document.getElementById('tabela').innerHTML = estrutura_ficha(ficha);