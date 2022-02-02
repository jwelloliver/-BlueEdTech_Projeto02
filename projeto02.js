/* Projeto 2 - Jokenpô
Para esse projeto, os requisitos fundamentais serão:
Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
Decidir de forma aleatória a decisão do computador;
Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
*/

// Inicio do Jogo

var prompt = require('prompt-sync')();
console.log("\n ##### Jogo Jokenpô ##### \n ")

// Variavel que vai reniciar o jogo, caso usuario queira jogar novamente.

let pergunta = 'S'; // Inicar com valor 'S' string para entra no while na condição solicitada.

// Lista com os valores do jogo onde iremos rodar função random para escolha aletoria do Computador.
const listaJogo = ['PEDRA','PAPEL','TESOURA'];

// Aqui iniciar o jogo ja com a condição que foi declarada acima no laço.
while (pergunta == 'S') {

        let vitoriaMinha = 0; // Variavel de contagem de vitorias do usuario.
        let vitoriaPc = 0 ; // Variavel de contagem de vitorias do computador.
        let empate = 0; // Variavel de contagem de empate.
        
        let rodadas = +prompt('Digite numero de rodadas: ');// Variavel onde usuario entra com numero de rodadas.
        
        // Aqui inicar o laço de repetição de acordo com as vezes de roda escolhida pelo usuario.
        for (cont = 0; cont < rodadas; cont++) {
                
                // Variavel que ira receber a escolha do usuario.
                var minhaEscolha = prompt("Digite entre Pedra, Papel ou Tesoura: ").toUpperCase();
                
                // Variavel que sera escolhida de forma aleatoria pelo computador.
                const pcEscolha = listaJogo[Math.floor(Math.random() * listaJogo.length)];

                // Aqui sera impressor na tela a decisão de cada
                console.log(`\nMinha Decisao: ${minhaEscolha}`);
                console.log(`Decisao do compudator: ${pcEscolha}\n`);
                
                // Condição para contagem de vitorias e empate de cada.
                if (pcEscolha == 'PEDRA' && minhaEscolha == 'TESOURA') {
                        console.log("Computador Ganhou !!");
                        vitoriaPc = vitoriaPc + 1;
                
                }if (minhaEscolha == 'PEDRA' && pcEscolha == 'TESOURA') {
                        console.log("Voce Ganhou !!");
                        vitoriaMinha = vitoriaMinha + 1;
                
                }if (pcEscolha == 'PEDRA' && minhaEscolha == 'PAPEL') {
                        console.log("Voce Ganhou !!");
                        vitoriaMinha = vitoriaMinha + 1;
                
                }if (minhaEscolha == 'PEDRA' && pcEscolha == 'PAPEL') {
                        console.log("Computador Ganhou !!");
                        vitoriaPc = vitoriaPc + 1;
                
                }if (minhaEscolha == 'TESOURA' && pcEscolha == 'PAPEL') {
                        console.log("Voce Ganhou !!");
                        vitoriaMinha = vitoriaMinha + 1;
                
                }if (pcEscolha == 'TESOURA' && minhaEscolha == 'PAPEL') {
                        console.log("Computador Ganhou !!");
                        vitoriaPc = vitoriaPc + 1;
                
                }if (pcEscolha == minhaEscolha) {
                        console.log("Ninguem Ganhou !!");
                        empate = empate + 1;
                }
        } // for finalizando pelo numero de rodadas escolhida pelo usuario
        
        //condição para impressao na tela de quem e o vencedor e quantidade vitorias.
        if (vitoriaMinha > vitoriaPc) {
                console.log(`\nVocê venceu com total de vitoria: ${vitoriaMinha}`);
                console.log(`computador perdeu com total de vitoria: ${vitoriaPc}\n`);
                console.log(` Empataram ${empate}\n vezes`);
        
        }else if (vitoriaMinha == vitoriaPc) {
                console.log(`\nNiguem venceu, Empataram ${vitoriaPc} a ${vitoriaMinha} quantidade de vitorias para cada`);
                console.log(` A mesma escolha para cada ${empate}\n rodada`);
        
        }else{
                console.log(`\nO computador venceu com total de vitoria: ${vitoriaPc}`);
                console.log(`Você perdeu com total de vitoria: ${vitoriaMinha}\n`);
                console.log(` Empataram ${empate}\n veszes`);
        }
        
        // Aqui e pergunta se usuario que que jogar novamente entrando na condição verdadeira que while nessecita para que aja o loop.
        pergunta = prompt("Desejar jogar novamente S(sim) e N(nao): ").toUpperCase();
        

}// finalizando o while