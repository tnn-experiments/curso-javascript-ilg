// Namespaces
// -----------------

// exemplo 1
var meuWebApp1 = {
    nome: 'theandersonn',
    ver_nome: function () {
        console.log(meuWebApp1.nome);    
    }
};

meuWebApp1.ver_nome();

// exemplo 2
var meuWebApp2 = (function(){
    var profissao = 'desenvolvedor';

    return {
        ver_profissao: function () {
            return profissao;
        },
        mudar_profissao(nova_profissao) {
            profissao = nova_profissao;
        },
        apagar_profissao: function () {
            profissao = null;
        }

    }
})(); 

console.log( meuWebApp2.ver_profissao() );

meuWebApp2.mudar_profissao('designer');
console.log( meuWebApp2.ver_profissao() );


meuWebApp2.apagar_profissao();
console.log( meuWebApp2.ver_profissao() );