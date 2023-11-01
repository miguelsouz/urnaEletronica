
async function verificarIntegridadeUrna() {

    // Biblioteca CryptoJS: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js

    let hashUrnaAtual;
    let hashVerificado;

    await fetch('urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(conteudo => hashUrnaAtual = conteudo);
    
    await fetch('hashVerificado')
        .then(conteudo => conteudo.text())
        .then(conteudo => hashVerificado = conteudo);
        
    return {
        status: hashUrnaAtual === hashVerificado,
        hashUrnaAtual: hashUrnaAtual,
        hashVerificado: hashVerificado
    };

}

async function audioConfirmacao() {
    const audio = new Audio('./confirmacao.mp3');
    await audio.play();
}

async function urnaEletronica() {
    
    // declaração de varivéis
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let candidato4 = 0;
    let candidato5 = 0;
    let votonulo = 0;
    let votobranco = 0;
    let contador = 0;
    let opcao;

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

    let candidato = [
    [13, 'Luis Inácio LuLa da Silva'],
    [30, "Felipe D'Avila"],
    [22, 'Jair Messias Bolsonaro'],
    [24, 'Padre Kelmon'],
    [57, 'Ciro Gomes'],
    [46, 'Voto Branco']
    ]
    
    for (i = 0; i <= candidato.length; i++){
        
    }

    do {
        opcao = parseInt(prompt('Após a sua votação, digite a senha de MESÁRIO abaixo:')); 
        
        contador++;
        
        if (opcao === 13) {

            let confirmavoton = confirm('ATENÇÃO: seu voto será para: ' + candidato[0][1] + ('\n\nDeseja prosseguir?'));
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ', candidato[0][1])     
                candidato1++;
                await audioConfirmacao();
            
            }
            
        } else if (opcao === 30) {
            
            let confirmavoton = confirm('ATENÇÃO: seu voto será para:  ' + candidato[1][1] + ('\n\nDeseja prosseguir?'));
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',candidato[1][1])     
                candidato2++;
                await audioConfirmacao();

            }
            
        } else if (opcao === 22) {
            
            let confirmavoton = confirm('ATENÇÃO: seu voto será para: ' + candidato[2][1] + ('\n\nDeseja prosseguir?'));
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',candidato[2][1])     
                candidato3++;
                await audioConfirmacao();

            }
        } else if (opcao === 24) {
            
            let confirmavoton = confirm('ATENÇÃO: seu voto será para: ' + candidato[3][1] + ('\n\nDeseja prosseguir?'));
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',candidato[3][1])     
                candidato4++;
                await audioConfirmacao();

            }

        } else if (opcao === 57) {
            
            let confirmavoton = confirm('ATENÇÃO: ficará' + candidato[4][1] + '.Deseja prosseguir?');
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',candidato[4][1])     
                candidato5++;
                await audioConfirmacao();

            }
        } else if (opcao === 46) {
            
            let confirmavoton = confirm('ATENÇÃO: ficará em: ' + candidato[5][1] + '.Deseja prosseguir?');
            
            if (confirmavoton) {   
                console.log('Voto confirmado para: ',candidato[5][1])     
                votobranco++;
                await audioConfirmacao();

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
                await audioConfirmacao();
            }
        }
        
    } while (confirme !== "s" && confirme !== "S") + console.clear();
    
    // Saída para o usuário: boletim de urna
    
    contador = contador - 1;
    console.log('Este é o total de votos para o Candidato:', candidato[0][1], ':', candidato1);
    console.log('Este é o total de votos para o Candidato:', candidato[1][1], ':', candidato2);
    console.log('Este é o total de votos para o Candidato:', candidato[2][1], ':', candidato3);
    console.log('Este é o total de votos para o Candidato:', candidato[3][1], ':', candidato4);
    console.log('Este é o total de votos para o Candidato:', candidato[4][1], ':', candidato5);
    console.log('Este é o total de votos para o Voto em Branco:', votobranco);
    console.log('Este é o total de votos para o Voto Nulo:', votonulo);

    console.log('------------------------------------------')

    const totaldevotos = (candidato1 + candidato2 + candidato3 + candidato4 + candidato5 + votobranco + votonulo);
    console.log('\ntotal dos votos: ', totaldevotos);
    
    console.log('\nrelação de votos do candidato', candidato[0][1], ':', candidato1);
    console.log('percentual de votos do candidato ', candidato[0][1],':', ((candidato1 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('\nrelação de votos do candidato', candidato[1][1] ,':', candidato2);
    console.log('percentual de votos do candidato ', candidato[1][1],':', ((candidato2 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('\nrelação de votos do candidato', candidato[2][1], ':', candidato3);
    console.log('percentual de votos do candidato ', candidato[2][1],':', ((candidato3 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('\nrelação de votos do candidato', candidato[3][1], ':', candidato3);
    console.log('percentual de votos do candidato ', candidato[3][1],':', ((candidato3 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('\nrelação de votos do candidato', candidato[4][1], ':', candidato3);
    console.log('percentual de votos do candidato ', candidato[4][1],':', ((candidato3 / totaldevotos * 100).toFixed(2)) +'%');

    console.log('\nrelação de votos Brancos:', votobranco);
    console.log('percentual de votos Brancos:', ((votobranco / totaldevotos).toFixed(2)) * 100 +'%');
   
    console.log('\nrelação de Votos Nulos:', votonulo);
    console.log('percentual de votos nulos:', ((votonulo / totaldevotos).toFixed(2)) * 100 + '%');

    console.log('------------------------------------------')

    // determinação do ganhador
    if (candidato1 > candidato2 && candidato1 > candidato3 & candidato1 > candidato4 & candidato1 > candidato5) {
        console.log('O ganhador é o:', candidato[0][1]);
        console.log('total de votos confirmados:', candidato1 + votobranco,);
        
    } else if (candidato2 > candidato1 && candidato2 > candidato3 & candidato2 > candidato4 & candidato2 > candidato5) {
        console.log('O ganhador é o:', candidato[1][1]);
        console.log('Total de votos confirmados:', candidato2 + votobranco);

    } else if (candidato3 > candidato1 && candidato3 > candidato2 & candidato3 > candidato4 & candidato3 > candidato5) {
        console.log('O ganhador é o:', candidato[2][1]);
        console.log('Total de votos confirmados:', candidato3 + votobranco);

    } else if (candidato4 > candidato1 && candidato4 > candidato2 & candidato4 > candidato5) {
        console.log('O ganhador é o:', candidato[3][1]);
        console.log('Total de votos confirmados:', candidato4 + votobranco);

    } else if (candidato5 > candidato1 && candidato5 > candidato2 & candidato5 > candidato3 & candidato5 > candidato4) {
        console.log('O ganhador é o:', candidato[4][1]);
        console.log('Total de votos confirmados:', candidato5 + votobranco);

    } else {
        console.log('Empate');

    } 

    console.log('------------------------------------------')
    console.log('Começo da urna: ' + time.toLocaleString());
    console.log('Fim da urna: ', timend = new Date());

    await verificarIntegridadeUrna().then(verificacao => {
        if (verificacao.status) {
            console.log('Hashes verificados, urna íntegra');
        } else {
            console.log('URNA ADULTERADA!');
            console.log(`Hash da urna: ${verificacao.hashUrnaAtual}`);
            console.log(`Hashe esperado: ${verificacao.hashVerificado}`);
        }

        console.log('\nFim do Programa');
    })


}