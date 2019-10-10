// Escopo
// -----------------------

// Escopo Local
function criar_nome() {
    var nome = 'Maria';
    console.log(nome); // O console mostrará 'Maria'
}

criar_nome();

console.log(nome); // Este comando gerará um erro, pois aqui não temos acesso às variáveis de escopo local da função criar_nome.

// Escopo Global
var nome = 'Helena';
                        
function mostrar_nome() {
    console.log(nome); 
}

mostrar_nome(); // O console mostrará 'Helena'
