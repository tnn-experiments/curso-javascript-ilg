// LocalStorage

// exemplo 1
window.localStorage.setItem('nome', 'joão');
console.log(localStorage['nome']);

localStorage.removeItem('nome');
console.log(localStorage['nome']);

// exemplo 2
document.getElementById('enviar-nome').onclick = function() {
    var nome = document.getElementById('nome-usuario').value;
    localStorage.setItem('nome', nome);

    document.getElementById('name-field').style.display = 'none';  
    document.getElementById('welcome-text').innerHTML = 'Olá ' + localStorage.nome + ', tudo bem?';  
    document.getElementById('not-me').innerHTML = 'Não é ' + localStorage.nome + '?';  
    document.getElementById('welcome-area').style.display = 'initial';  
};