// Funções callback
// ---------------------
// exemplo 1 (funciona)
function pegar_usuario_1(){
    
    var u = {
        'nome': 'João'
    };
    return u;

}
        
function saudar_usuario_1(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}
        
var user = pegar_usuario_1();
saudar_usuario_1(user);

// exemplo 2 (não funciona)
function pegar_usuario_2(){
    
    window.setTimeout(function() {
        var u = {
            'nome': 'João'
        };
        return u;
    }, 2000);

}
        
function saudar_usuario_2(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}
        
var user = pegar_usuario_2();
saudar_usuario_2(user);

// exemplo 3 (agora funciona)
function pegar_usuario_3(callback){
    
    window.setTimeout(function() {
        var u = {
            'nome': 'João'
        };
        
        callback(u);

    }, 2000);

}
        
function saudar_usuario_3(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}
        
pegar_usuario_3(saudar_usuario_3);