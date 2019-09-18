// Eventos
// ---------------

// onclick
document.getElementById('click-me').onclick = function () {
    alert('Você clicou no botão');
};

// onmouseover
document.getElementById('hover-me').onmouseover = function () {
    alert('Você passou com o cursor no botão');
};

// onmouseout
document.getElementById('leave-me').onmouseout = function () {
    alert('Você saiu com o cursor do botão');
};

// onkeydown (ao pressionar alguma tecla)
document.onkeydown = function () {
    alert('Você apertou a tecla: ' + event.keyCode);
};
