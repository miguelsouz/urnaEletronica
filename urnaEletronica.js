function urnaEletronica() {
    
    // declaração de varivéis
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votonulo = 0;
    let votobranco = 0;
    let contador = 0;
    let opcao;
    let nome1;
    let nome2;
    let nome3;
    let senha = 0;
    let confirme = "n";
    
    console.log('Início do programa')

    senha = parseInt(prompt('Digite sua senha de mesário'));

    do {
        nome1 = (prompt('Digite o nome do Candidato 1'));
        nome2 = (prompt('Digite o nome do Candidato 2'));
        nome3 = (prompt('Digite o nome do Candidato 3'));

        console.log('** NOMES DO CANDIDATOS**');
        console.log('Candidato 1:' + nome1);
        console.log('Candidato 2:' + nome2);
        console.log('Candidato 3:' + nome3);

    } while (!confirm('Se os nomes dos candidattos estão corretos, clique OK para continuar ou CANCELAR para voltar e digitar novamente'));
   
    do {
        opcao = parseInt(prompt(
        '\n  Digite a opção:' +
        '\n  |1| Candidato 1: ' + nome1 +
        '\n  |2| Candidato 2: ' + nome2 +
        '\n  |3| Candidato 3: ' + nome3 +            
        '\n  |5| Voto em Branco' + 
        '\n\n Após a sua votação, digite o PIN abaixo:')); 
        
        contador++;

        if (opcao === 1) {
            console.log('Voto confirmado com SUCESSO');
            candidato1++;

        } else if (opcao === 2) {
            console.log('Voto confirmado com SUCESSO');
            candidato2++;

        } else if (opcao === 3) {
            console.log('Voto confirmado com SUCESSO');
            candidato3++;

        } else if (opcao === 5) {
            console.log('Voto confirmado com SUCESSO');
            votobranco++;

        }else if (opcao === senha) {
            confirme = (prompt('Tem certeza que deseja encerrar a votação?'));

            if (confirme === "n"){
                return;

            } else if (confirme !== 'n' && confirme !== 'N' && confirme !== "s" && confirme !== "S"){
                alert('Opção inválida')
            }

        }else if (opcao) {
                
            let confirmavoton = confirm('ATENÇÃO: p seu voto será ANULADO. Deseja prosseguir?');

            if (confirmavoton) {        
                votonulo++;
            }
        }
    } while (confirme !== "s" && confirme !== "S"); 

    // Saída para o usuário: boletim de urna
    console.clear();

    contador = - 1;
    console.log('Este é o total de votos para o Candidato', nome1, ':', candidato1);
    console.log('Este é o total de votos para o Candidato:', nome2, ':', candidato2);
    console.log('Este é o total de votos para o Candidato:', nome3, ':', candidato3);
    console.log('Este é o total de votos para o Voto em Branco:', votobranco);
    console.log('Este é o total de votos para o Voto Nulo:', votonulo);
    console.log('Contagem:', contador);

    console.log('------------------------------------------')

    const totaldevotos = (candidato1 + candidato2 + candidato3 + votobranco + votonulo);
    console.log('total dos votos', totaldevotos);

    console.log('relação de votos do candidato', nome1, ':', candidato1);
    console.log('percentual de votos do candidato ', nome1,':', ((candidato1 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('relação de votos do candidato', nome2 ,':', candidato2);
    console.log('percentual de votos do candidato ', nome2,':', ((candidato2 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('relação de votos do candidato', nome3, ':', candidato3);
    console.log('percentual de votos do candidato ', nome3,':', ((candidato3 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('relação de votos Brancos:', votobranco);
    console.log('percentual de votos Brancos:', ((votobranco / totaldevotos).toFixed(2)) * 100 +'%');
   
    console.log('relação de Votos Nulos:', votonulo);
    console.log('percentual de votos nulos:', ((votonulo / totaldevotos).toFixed(2)) * 100 + '%');

    console.log('------------------------------------------');

    // determinação do ganhador
    if (candidato1 > candidato2 && candidato1 > candidato3) {
        console.log('O ganhador é o:', nome1);
        console.log('total de votos confirmados:', candidato1 + votobranco,);
        
    } else if (candidato2 > candidato2 && candidato2 > candidato3) {
        console.log('O ganhador é o:', nome2);
        console.log('Total de votos confirmados:', candidato2 + votobranco);

    } else if (candidato3 > candidato1 && candidato3 > candidato2) {
        console.log('O ganhador é o:', nome3);
        console.log('Total de votos confirmados:', candidato3 + votobranco);

    } else {
        console.log('Empate');
    }

}

console.log('Fim do Programa');