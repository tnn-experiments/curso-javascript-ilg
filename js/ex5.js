// Folha de Exercícios N. 5
// ----------------------------

// 1) Popule o select box abaixo com a lista de países do mundo. A tarefa deve ser realizada em duas partes:

// Uma função para pegar os países via AJAX, do seguinte endereço https://restcountries.eu/rest/v2/all
// Uma função para montar os elementos <option> com os nomes dos países, que deve ser chamada como callback da função acima.

function pegar_paises (callback) {

    $.ajax({
        url : "https://restcountries.eu/rest/v2/all",
        type: "GET",
        dataType: "json",
    }).done(function(data){
        callback(data);      
    }).fail(function(){
        console.log("Erro na requisição");
    });

}

function popular_paises (paises) {
    for (var a = 0; a < paises.length; a++) {
        document.getElementById('paises').innerHTML += '<option value="'+ paises[a].alpha3Code +'">'+ paises[a].name +'</option>';
    }
}

pegar_paises( popular_paises );

// 2) Crie uma função para receber o array abaixo como argumento e calcular a média de avaliações dos cursos e soltá-las no console. Use Try/Catch/Throw para atender às condições abaixo:

// Se um curso não tiver avaliações, deve soltar "Curso não possui nenhuma avaliação".
// Se o curso tiver menos de 5 avaliações, deve soltar "Curso não tem avaliações suficientes".
// Se o curso tiver 5 ou mais avaliações, soltar a média de avaliações.

var cursos = [
    {
        "titulo": "PHP",
        "aval": []
    },
    {
        "titulo": "Javascript",
        "aval": [5,5,4.5,4,5,5,5,4.5]
    },
    {
        "titulo": "Python",
        "aval": [5,5,4,4,5,3,5,4,4,5]
    },
    {
        "titulo": "Machine Learning",
        "aval": [5,5,4.5]
    }
];

function media_aval (lista_cursos) {

    for (var a = 0; a < lista_cursos.length; a++) {
        
        try {

            if (lista_cursos[a].aval.length == 0) {
                throw 'Curso ' + lista_cursos[a].titulo + ' não possui avaliações.';
            } else if (lista_cursos[a].aval.length < 5) {
                throw 'Curso ' + lista_cursos[a].titulo + ' possui menos de 5 avaliações.';
            }

            var soma = 0;

            for (var b = 0; b < lista_cursos[a].aval.length; b++) {
                soma += lista_cursos[a].aval[b];
            }

            var media = soma / lista_cursos[a].aval.length;

            console.log('Curso ' + lista_cursos[a].titulo + ' tem média de avaliações: ' + media.toFixed(2));

        }

        catch (err) {
            console.log(err);
        }
    
    }

}

media_aval(cursos);

// 3) Passe as variáveis abaixo para um namespace próprio. 
// Dentro deste namespace, crie uma função para percorrer o array de acessos e soltar no local abaixo a lista dos acessos no seguinte formato: 
// "Acesso de Eduardo Jorge, no dia 13/07/18"

var theUserNamespace = {
    usuarios: {
        '33884h': 'João Gomes',
        '43585f': 'Maria Luisa',
        '93661h': 'Pedro Henqrique',
        '23172g': 'Paula Carvalho'        
    },

    acessos: [
        {
            "usuario": "33884h",
            "data": "10/07/18"
        },
        {
            "usuario": "33884h",
            "data": "11/07/18"
        },
        {
            "usuario": "43585f",
            "data": "19/07/18"
        },
        {
            "usuario": "93661h",
            "data": "24/07/18"
        },
        {
            "usuario": "23172g",
            "data": "13/08/18"
        },
        {
            "usuario": "93661h",
            "data": "14/08/18"
        }        
    ],

    imprimir_acessos: function () {
        for (var a = 0; a < this.acessos.length; a++) {
            $('#acessos').append('<li>Acesso de '+ this.usuarios[this.acessos[a].usuario] +', no dia '+ this.acessos[a].data +'</li>');
        }
    }
}

theUserNamespace.imprimir_acessos();

// 4) Desafio final: Trabalhe com o API Open Trivia para gerar uma pergunta sobre filmes. Endereço do API: https://opentdb.com/api_config.php

// Esta pergunta deve ser colocada abaixo, com as opções de resposta em radio buttons. 
// Deve haver também um botão "Enviar Reposta", que informará ao usuário se a resposta está certa ou errada. 
// O botão só deve aparecer se alguma resposta estiver marcada.

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function pegar_pergunta (callback) {

    $.ajax({
        url : "https://opentdb.com/api.php?amount=1&category=11",
        type: "GET",
        dataType: "json",
    }).done(function(data){
        callback(data.results[0]);      
    }).fail(function(){
        console.log("Erro na requisição");
    });

}

$('#nova_pergunta').click(function(){
    $('#opcoes').html('');
    $('#erro_acerto').html('');
    $('#pergunta').html('');
    $('#nova_pergunta').hide();
    pegar_pergunta(gerar_pergunta);
});

function gerar_pergunta (pergunta) {
    $('#pergunta').html(pergunta.question);
    var resposta_correta = pergunta.correct_answer;
    var respostas = pergunta.incorrect_answers;

    respostas.push(resposta_correta);
    respostas = shuffle(respostas);

    for (a = 0; a < respostas.length; a++) {
        $('#opcoes').append('<input type="radio" name="opcao" value="'+ respostas[a] +'">'+ respostas[a] +'<br>');
    }

    $('#opcoes input[name="opcao"]').change(function() {
        $('#submeter').show();
    });

    $('#submeter').click(function(){
        var resposta_escolhida = $('#opcoes input[name="opcao"]:checked').val();

        $('#submeter').hide();

        if (resposta_escolhida == resposta_correta) {
            $('#erro_acerto').html('<span style="color: green"; font-weight: bold;"> Parabéns, você acertou! A resposta é: ' + resposta_correta + '</span>');
        } else {
            $('#erro_acerto').html('<span style="color: red"; font-weight: bold;"> Você errou! A resposta é: ' + resposta_correta + '</span>');
        }

        $('#opcoes input[name="opcao"]').attr('disabled', true);
        $('#nova_pergunta').show();
    });

}

pegar_pergunta(gerar_pergunta);