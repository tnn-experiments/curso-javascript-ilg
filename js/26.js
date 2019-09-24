// 26 - data e hora
// ---------------------

// exemplo 1
var data_hoje = new Date();
console.log(data_hoje.getDate());

// exemplo 2
var data_nascimento = '1948-08-05';
var ano_nascimento = new Date(data_nascimento).getFullYear();
var ano_atual = new Date().getFullYear();
var idade = ano_atual - ano_nascimento;
console.log(idade);

// exemplo 3
var um_segundo_ms = 1000;
var um_minuto_ms  = 60000;
var uma_hora_ms   = 3600000;
var um_dia_ms     = 86400000;
var um_ano_ms     = 31536000000;

var data = new Date();
console.log( data.getTime() / um_ano_ms ); // exibe quantos anos se passaram de 1970 até hoje.

// exemplo 4
var data_envio = new Date('2018-03-20');
data_envio = data_envio.getTime();

var data_entrega = new Date('2018-04-06');
data_entrega = data_entrega.getTime();

var dias = (data_entrega - data_envio) / um_dia_ms;
console.log(dias);

document.getElementById('dias_entrega').innerHTML = dias;