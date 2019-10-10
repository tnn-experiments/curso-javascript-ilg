// Lidando com erros (Erros handling)
// -------------------------------------

// try {
//     console.log('funcionalidade');
// } catch {
//     console.log('tratamendo erro');
} 

function pegar_usuario(){

    window.setTimeout(function(){
        var u = {
            'nome': 'João'
        };
        return u;
    }, 1000);
    
}
        
function saudar_usuario(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}

try {
    var user = pegar_usuario();
    saudar_usuario(user);
} catch {
    console.log('Olá, como vai?');
} finally {
    console.log('Este comando será sempre executado');
}

console.log('Novo comando para executar ao final');