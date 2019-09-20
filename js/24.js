// BOM - Browser Object Model

window.onmousemove = function(e) {
    if(e.pageY < 5) {
        this.alert('Não perca os descontos exclusivos na seção de promoções');
    }
}