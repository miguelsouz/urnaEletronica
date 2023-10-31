
function verificarIntegridadeUrna() {
    fetch('./urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(hashUrnaAtual => {  
            fetch('./hashVerificado')
                .then(conteudo => conteudo.text())
                    .then(hashVerificado => {
                    if (hashUrnaAtual === hashVerificado) {
                        console.log('Hash verificado, urna integra.')
                    } else {
                        console.log('HASHES DIFERENTES, URNA ADULTERADA!!')
                        console.log(`Hash esperado: ${hashVerificado}`)
                        console.log(`Hash da urna: ${hashUrnaAtual}`)
                    }
                })
        });

}

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
    let confirme;
    let time = new Date();
    let opcaoNome;
    let primeiraconfirmação = true;

    console.log('Início do programa');
    console.log('Começando a votação ás: ' + time.toLocaleString());

    function timend() {
        time = new Date();
        return time;
    }

    senha = parseInt(prompt('Digite sua senha de mesário'));

    do {

        let candidatos = [

        [13, 'Luis Inácio LuLa da Silva', 'PT']
        [22, 'Jair Messias Bolsonaro', 'PL']
        [24, 'Padre Kelmon', 'PTB']
        [57, 'Ciro Gomes', 'PDT']
        [46, 'Voto Branco']
        ]
        
        for (i = 0; i <= candidatos.length; i++) {

            alert (`Nº: ${(candidatos[i][0])} | Nome do Candidato: ${candidatos[i][1]} | Partido: ${candidatos[i][2]}`);
        }
        
        
    } while (!confirm('Se os nomes dos candidattos estão corretos clique OK para continuar, e CANCELAR para voltar e digitar os nomes novamente'));
    
    do {
        opcao = parseInt(prompt('Após a sua votação, digite a senha de MESÁRIO abaixo:')); 
        
        contador++;
        
        if (opcao === 1) {

            let confirmavoton = confirm('ATENÇÃO: seu voto será para: ' + nome1 + ('\n\nDeseja prosseguir?'));
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',nome1)     
                
                candidato1++;
            
            }
            
        } else if (opcao === 2) {
            
            let confirmavoton = confirm('ATENÇÃO: seu voto será para:  ' + nome2 + ('\n\nDeseja prosseguir?'));
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',nome2)     
                candidato2++;

            }
            
        } else if (opcao === 3) {
            
            let confirmavoton = confirm('ATENÇÃO: seu voto será para: ' + nome3 + ('\n\nDeseja prosseguir?'));
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',nome3)     
                candidato3++;

            }

        } else if (opcao === 5) {
            
            let confirmavoton = confirm('ATENÇÃO: seu voto ficará em Branco.Deseja prosseguir?');
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',nome1)     
                votobranco++;

            }
            
        }else if (opcao === senha) {
            confirme = (prompt('Tem certeza que deseja encerrar a votação?'));
            
            if (confirme === "n"){
                
            } else if (confirme !== 'n' && confirme !== 'N' && confirme !== "s" && confirme !== "S"){
                alert('Opção inválida')
                
            }
            
        }else if (opcao) {
            
            let confirmavoton = confirm('ATENÇÃO: seu voto será ANULADO. Deseja prosseguir?');
            
            if (confirmavoton) {   
                console.log('Voto confirmado como Nulo.')     
                votonulo++;
            }
        }
        
    } while (confirme !== "s" && confirme !== "S") + console.clear();
    
    // Saída para o usuário: boletim de urna
    
    contador = contador - 1;
    console.log('Este é o total de votos para o Candidato', nome1, ':', candidato1);
    console.log('Este é o total de votos para o Candidato:', nome2, ':', candidato2);
    console.log('Este é o total de votos para o Candidato:', nome3, ':', candidato3);
    console.log('Este é o total de votos para o Voto em Branco:', votobranco);
    console.log('Este é o total de votos para o Voto Nulo:', votonulo);
    console.log('------------------------------------------')

    const totaldevotos = (candidato1 + candidato2 + candidato3 + votobranco + votonulo);
    console.log('\ntotal dos votos', totaldevotos);
    
    console.log('\nrelação de votos do candidato', nome1, ':', candidato1);
    console.log('percentual de votos do candidato ', nome1,':', ((candidato1 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('\nrelação de votos do candidato', nome2 ,':', candidato2);
    console.log('percentual de votos do candidato ', nome2,':', ((candidato2 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('\nrelação de votos do candidato', nome3, ':', candidato3);
    console.log('percentual de votos do candidato ', nome3,':', ((candidato3 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('\nrelação de votos Brancos:', votobranco);
    console.log('percentual de votos Brancos:', ((votobranco / totaldevotos).toFixed(2)) * 100 +'%');
   
    console.log('\nrelação de Votos Nulos:', votonulo);
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
    
    console.log(timend = new Date());

    verificarIntegridadeUrna();

    console.log('\nFim do Programa');

}