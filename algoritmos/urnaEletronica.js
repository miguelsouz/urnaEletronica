function urnaEletronica() {

    let opcao;
    let contador = 0;

    let nome1;
    let nome2;
    let nome3;

    nome1 = (prompt('Digite o nome do Candidato 1'));
    nome2 = (prompt('Digite o nome do Candidato 2'));
    nome3 = (prompt('Digite o nome do Candidato 3'));

    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votonulo = 0;
    let votobranco = 0;
    let senhaf = 251575;
    let text = 'Seu voto foi ANULADO. Deseja registrar?'
    let confirme = "n";
    

    do {
            opcao = parseInt(prompt(
            '\n  Digite a opção:' +
            '\n  |1| Candidato 1:' + nome1 +
            '\n  |2| Candidato 2:' + nome2 +
            '\n  |3| Candidato 3:' + nome3 +
            '\n  |5| Voto ficou em Branco' + 
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

            }else if (opcao === senhaf) {
                confirme = (prompt('Tem certeza que deseja encerrar a votação?'));
                if (confirme == "n"){
                    }

            }else if (opcao) {
                
                let confirmavoton = confirm('O seu voto foi ANULADO. Deseja registrar?');

                if (confirmavoton) {
                        console.log('Seu Voto nulo foi registrado com SUCESSO.')
                        votonulo++;
                }
            }

    } while (confirme !== "s");
        
            contador = contador - 1;
            console.log('Este é o total de votos para o Candidato', nome1, ':', candidato1);
            console.log('Este é o total de votos para o Candidato:', nome2, ':', candidato2);
            console.log('Este é o total de votos para o Candidato:', nome3, ':', candidato3);
            console.log('Este é o total de votos para o Voto em Branco:', votobranco);
            console.log('Este é o total de votos para o Voto Nulo:', votonulo);
            console.log('Contagem:', contador);

            const totaldevotos = (candidato1 + candidato2 + candidato3 + votobranco + votonulo);
            console.log('total dos votos', totaldevotos);

            console.log('relação de candidato', nome1, candidato1);
            console.log('percentual de votos do candidato', ((candidato1 / totaldevotos * 100).toFixed(2)) +'%');
            console.log('relação de candidato', nome2, candidato2);
            console.log('percentual de votos do candidato', ((candidato2 / totaldevotos * 100).toFixed(2)) +'%');
            console.log('relação de candidato', nome3, candidato3);
            console.log('percentual de votos do candidato', ((candidato3 / totaldevotos * 100).toFixed(2)) +'%');
            console.log('relação de votos Brancos', votobranco);
            console.log('percentual de votos Brancos', ((votobranco / totaldevotos).toFixed(2)) * 100 +'%');
            console.log('relação de Votos Nulos', votonulo);
            console.log('percentual de votos nulos', ((votonulo / totaldevotos).toFixed(2)) * 100 + '%');

            if (candidato1 > candidato2 && candidato1 > candidato3) {
                console.log('O ganhador é o:', nome1);
                console.log('total de votos confirmados:', candidato1,'\nE os votos Brancos:', votobranco,);
            } else if (candidato2 > candidato2 && candidato2 > candidato3) {
                console.log('O ganhador é o:', nome2);
                console.log('Total de votos confirmados:', candidato2,'\nE os em Brancos:', votobranco);
            } else if (candidato3 > candidato1 && candidato3 > candidato2) {
                console.log('O ganhador é o:', nome3);
                console.log('Total de votos confirmados:', candidato3,'\nE os em Brancos:', votobranco);
            } else {
                console.log('Empate');
            }

}