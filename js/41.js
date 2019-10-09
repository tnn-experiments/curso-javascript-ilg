// jQuery - Animate
// ------------------------

// animate({},tempo em milisegundos);

// exemplo 1
$('#animar').click(function(){
    $('#quadrado').animate({
        width: '+=20px',
        height: '+=20px'
    },2000);
});

// exemplo 2
$('#animar').click(function(){
    
    $('#quadrado').animate({
        width: '+=100px'
    },5000);

    $('#quadrado').animate({
        height: '+=100px'
    },5000);
    
});