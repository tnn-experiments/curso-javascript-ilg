// Switch

function valor_pedagio (categoria) {

    switch(categoria) {

        case '1':
            return 11.22;
            break;

        case '2':
            return 22.45;
            break;
            
        case '3':
            return 16.88;
            break;
            
        case '4':
            return 33.65;
            break;
            
        default:
            return 'categoria não encontrada';    

    }

}

var categoria_veiculo = '3';
console.log( valor_pedagio (categoria_veiculo) );

var categoria_veiculo = '1';
console.log( valor_pedagio (categoria_veiculo) );

var categoria_veiculo = '5';
console.log( valor_pedagio (categoria_veiculo) );