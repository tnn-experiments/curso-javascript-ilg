// LocalStorage

// exemplo 1
window.localStorage.setItem('nome', 'joão');
console.log(localStorage['nome']);

localStorage.removeItem('nome');
console.log(localStorage['nome']);

// exemplo 2
document.getElementById('enviar-nome').onclick = function() {
    // guardar o nome digitado em local storage
    var nome = document.getElementById('nome-usuario').value;
    localStorage.setItem('nome', nome);

    // esconder o formulário
    document.getElementById('name-field').style.display = 'none';  
    
    // atualizar e mostrar mensagem de boas vindas
    document.getElementById('welcome-text').innerHTML = 'Olá ' + localStorage.nome + ', tudo bem?';  
    document.getElementById('not-me').innerHTML = 'Não é ' + localStorage.nome + '?';  
    document.getElementById('welcome-area').style.display = 'initial';  
};

if(localStorage.nome) {
    // esconder o formulário
    document.getElementById('name-field').style.display = 'none';  

    // atualizar e mostrar mensagem de boas vindas
    document.getElementById('welcome-text').innerHTML = 'Olá ' + localStorage.nome + ', tudo bem?';  
    document.getElementById('not-me').innerHTML = 'Não é ' + localStorage.nome + '?';  
    document.getElementById('welcome-area').style.display = 'initial';      
};

document.getElementById('not-me').onclick = function() {
    // remover chave nome do local storage
    localStorage.removeItem('nome');

    // esconder mensagem de boas vindas
    document.getElementById('welcome-area').style.display = 'none';

    // mostrar formulário
    document.getElementById('name-field').style.display = 'initial';
};