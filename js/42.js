// jQuery - Métodos em cadeia
// -----------------------------


// exemplo 1
$("#animar").click(function(){

    $("#quadrado").animate({
        width: '+=20px'
    },500).animate({
        height: '+=20px'
    },500).css('background-color', 'green');

});

// exemplo 2
$("#animar").click(function(){

    $("#quadrado").animate({
        width: '+=20px'
    },500).animate({
        height: '+=20px'
    },500, function() {
        $("#quadrado").css('background-color', 'pink')
    });

});