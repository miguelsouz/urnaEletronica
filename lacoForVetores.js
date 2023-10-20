// const minhaMatriz = [
//     [71, 72, 73]
//     ['Candidato 1', 'Candidato 2', 'Candidato 3'],

// ]




// for (i = 0, i <= 2; i++) {

//     for (j = 0, j <= 2; j++) {

//         console.log(minhaMatriz[i][j]);
//     }

// }


const tabuada = [6, 8];

for (i = 0; i <=2; i++) {
    console.log('Tabuada do ' + tabuada[i]);
    for (j = 0; j <= 10; j+=2) {
        console.log(tabuada[i] + 'x' + j + '=' + (tabuada[i] * j));
    }
    console.log();
}