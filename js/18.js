// Outros métodos getElement
// --------------------------------

// Retorna seleção dos elementos com a classe exemplo
var exemplo = document.getElementsByClassName('exemplo');
console.log( typeof(exemplo) );

// Manipulando os elementos
exemplo[0].innerHTML = 'Esse é o elemento 1';
exemplo[1].style['background-color'] = 'red';

// Retorna seleção dos elementos a tag p
var exemplo2 = document.getElementsByTagName('p');
console.log( typeof(exemplo2) );