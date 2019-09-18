// Manipulação do CSS

// document.getElementById("botao_cor").onclick = function() {
//     document.getElementById("botao_cor").style['background-color'] = "purple";
//     document.getElementById("botao_cor").style.transform = "translateX(100px)";
// };

var botao = document.getElementById("botao_cor");

botao.onclick = function() {
    this.style['background-color'] = "purple";
    this.style.transform = "translateX(100px)";
};