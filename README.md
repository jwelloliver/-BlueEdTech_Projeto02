![Alt ou título da imagem](https://2315530342-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mi99jjCn0YFUe30kpPL%2Fuploads%2FmFlzIcbVMgh6m16kALMg%2Fezgif.com-gif-maker%20(1).gif?alt=media&token=bcb684fe-45d5-4feb-a22b-8fb51c8c0022)

# <h1 align="center"> Projeto 2 - Jokenpô </h1>

## Descrição do Projeto
O Jokenpô é o popular jogo do "Pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.

- Pedra ganha da tesoura, mas perde para o papel;
- Tesoura ganha do papel, mas perde para a pedra;
- Papel ganha da pedra, mas perde para a tesoura.

E para esse projeto você deve desenvolver um programa capaz de :

- Receber o elemento escolhido pelo usuário;
- Escolher um elemento aleatório para o computador;
- Comparar os dois elementos e declarar um vencedor.

Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).

## Requisitos
Para esse projeto, os requisitos fundamentais serão:

1. Permitir que eu decida quantas rodadas iremos fazer;
2. Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
3. Decidir de forma aleatória a decisão do computador;
4. Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
5. Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
6. Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
7. Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
8. Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

## Desenvolvimento do código

```javascript

// Solicitar quantidade de rodadas que ira fazer
let rodadas = +prompt('Digite numero de rodadas: ');

```
```javascript
// Declarando as variaveis
let cont = 0; // contadora para usar no while
let vitoriaMinha = 0; // contadora numero de vitorias do Usuario
let vitoriaPc = 0 ; // contadora numero de Vitorias do Computador
```
```javascript
// Criando um lista de pedra, papel e tesoura
const listaJogo = ['PEDRA','PAPEL','TESOURA'];
```
```javascript
// Começo de um laço de repetição de acordo com a quantidade de laço que ira acontecer
while (cont < rodadas) { 

// Criando a variavel minha escolha, captura a escolha do usuario
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

```