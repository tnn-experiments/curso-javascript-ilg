// Break e Continue
// ----------------------

// exemplo 1 (break)
var x = 0;

while (x < 10) {
    console.log(x);
    x++;

    if (x==5) {
        break;
    }
}

// exemplo 2 (break)
var lista = [1,5,-1,1000,50,38,238,2,33,5000,0,100,8,9,18,568,602];

for (a=0; a<lista.length; a++) {
    if (lista[a] == 33) {
        console.log('Valor encontrado');
        break;
    }

    console.log('Tentativa ' + a);
}

// exemplo 3 (continue)
var num = 0;

while (num < 20) {
    
    if (num == 3) {
        num++;
        continue;
    }
    
    console.log(num);
    num++;
}

// exemplo 4 (continue)

var num = 0;

while (num < 20) {
    num++;

    if (num % 2 == 0) {
        continue;
    }

    console.log(num);
    // exibe apenas números ímpares
}