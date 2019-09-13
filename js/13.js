// Objetos
// -------------

// Exemplo 1
var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};

console.log(funcionario['nome']);
console.log(funcionario.nome);

funcionario.cargo = 'Gerente de TI';
funcionario.cnh = '19845638222';

console.log(funcionario);

// Exemplo 2
var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];

// Acesse desenvolvimento web
console.log(cursos[1]['categorias'][0]);

// Troque gestão por administração de empresas
cursos[2]['categorias'][1] = 'administração de empresas'

console.log(cursos[2]['categorias'][1]);