function urnaEletronica() {

    let opcao;
    let contador = 0;

    let nome1;
    let nome2;
    let nome3;

    nome1 = (prompt('Digite o nome'));
    nome2 = (prompt('Digite o nome'));
    nome3 = (prompt('Digite o nome'));

    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votonulo = 0;
    let votobranco = 0;
    let confirme = "n";
    

    do {
            opcao = parseInt(prompt(
            '\n Digite a opção:' +
            '\n |1| Candidato 1:' + nome1 +
            '\n |2| Candidato 2:' + nome2 +
            '\n |3| Candidato 3:' + nome3 +
            '\n |5| Voto em Branco' + 
            '\n |8| Voto Nulo' +
            '\n\n Após a sua votação, digite o PIN abaixo:')); 

            contador++;

            if (opcao == 1) {
                    console.log('Opção do voto é o', nome1);
                    candidato1++;

            } else if (opcao == 2) {
                    console.log('Opção do voto é o', nome2);
                    candidato2++;

            } else if (opcao == 3) {
                    console.log('Opção do voto é o', nome3);
                    candidato3++;

            } else if (opcao == 5) {
                    console.log('Opção do voto é voto em branco');
                    votobranco++;

            } else if (opcao == 8) {
                    console.log('Opção do voto é nulo ');
                    votonulo++;

            } else if (opcao == 251575) {
                    confirme = (prompt('Tem certeza que deseja encerrar a votação?'));
                    if (confirme == "não" && "Não") {
                }
            }
    } while (confirme !== "sim" && "Sim");
        
            contador = contador - 1;
            console.log('Este é o total de votos para o Candidato', nome1, ':', candidato1);
            console.log('Este é o total de votos para o Candidato:', nome2, ':', candidato2);
            console.log('Este é o total de votos para o Candidato:', nome3, ':', candidato3);
            console.log('Este é o total de votos para o Voto em Branco:', votobranco);
            console.log('Este é o total de votos para o Voto Nulo:', votonulo);
            console.log('Contagem:', contador);

            if (candidato1 > candidato2 && candidato1 > candidato3) {
                console.log('O ganhador é o', nome1);
                console.log('total de Votos válidos e os votos Brancos', votobranco + candidato1);
            } else if (candidato2 > candidato2 && candidato2 > candidato3) {
                console.log('O ganhador é o', nome2);
                console.log('Total de votos confirmados e os em Brancos', votobranco + candidato2);
            } else if (candidato3 > candidato1 && candidato3 > candidato2) {
                console.log('O ganhador é o', nome3);
                console.log('Total de votos confirmados e os em Brancos', votobranco + candidato3);
            } else {
                console.log('Empate');
            }

}