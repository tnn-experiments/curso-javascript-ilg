// JSON
// -------------------

var funcionario = {
    nome: 'Fernanda Costa',
    d_nascimento: '1988-10-01',
    CPF: '111.111.111-11'
};

console.log(funcionario);

var funcionario_json = JSON.stringify(funcionario);
console.log(typeof funcionario_json); // transforma em string
console.log(funcionario_json);

var funcionario_obj = JSON.parse(funcionario_json);
console.log(typeof funcionario_obj); // transforma em objeto
console.log(funcionario_obj);

var grupo_A = ['Real Madrid', 'Porto', 'Liverpool', 'Manchester United'];
console.log( JSON.stringify(grupo_A) );
console.log( typeof JSON.stringify(grupo_A) ); // O console mostrará "string"


// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
var info_temp = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}';

var info = JSON.parse(info_temp);

console.log(info);
console.log('A umidade é de: ' + info.main.humidity + '%');