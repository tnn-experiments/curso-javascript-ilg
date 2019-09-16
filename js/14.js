// Métodos de objetos
var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1992,
    'ano_corrente': 2019,
    'nome_completo': function() {
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    },
    'idade_atual': function() {
        var i_atual = this.ano_corrente - this.ano_nasc;
        return i_atual;
    }
};

console.log( aluno.nome_completo() );
console.log( aluno.idade_atual() );

// Dica - console
console.log( console );