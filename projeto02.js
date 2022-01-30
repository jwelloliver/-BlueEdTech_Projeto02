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

// Solicitar quantidade de rodadas que ira fazer

let rodadas = +prompt('Digite numero de rodadas: ');
let cont = 0;
let vitoriaMinha = 0;
let vitoriaPc = 0 ;

// Criando um lista de pedra, papel e tesoura

const listaJogo = ['PEDRA','PAPEL','TESOURA'];

// Criando um laço de repetição para quantidade de rodadas ira acontecer
while (cont < rodadas) {

// Criando a variavel minha escolha
var minhaEscolha = prompt("Digite entre Pedra, Papel ou Tesoura: ").toUpperCase();
 
// Escolhendo de forma eleatoria indice dentro da listaJogos, e armazenando em uma variavel a decisão do Computador
const pcEscolha = listaJogo[Math.floor(Math.random() * listaJogo.length)];

// imprimindo minha decisao e do computador
console.log(`\nMinha Decisao: ${minhaEscolha}`);
console.log(`Decisao do compudator: ${pcEscolha}\n`);

// Condições para cada um Ganhar ou Perder e acumulando a vitoria de cada um na rodadas
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
}
    cont++;
} //Finalizando while

// Condição fora do While para Esclarecer o vencedor por quantidade de Rodadas vencidas
if (vitoriaMinha > vitoriaPc) {
    console.log(`\nVocê venceu com total de vitoria: ${vitoriaMinha}`);
    console.log(`computador perdeu com total de vitoria: ${vitoriaPc}\n`);    
}if (vitoriaMinha == vitoriaPc) {
    console.log(`\nNiguem venceu, Empataram ${vitoriaPc} a ${vitoriaMinha}`);
}else{
    console.log(`\nO computador venceu com total de vitoria: ${vitoriaPc}`);
    console.log(`Você perdeu com total de vitoria: ${vitoriaMinha}\n`);
}



