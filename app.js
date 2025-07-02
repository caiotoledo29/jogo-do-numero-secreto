let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let  numeroSecreto = numeroAleatorio();
let tentativas = 1;

function escrevaTela ( tag , texto ) {  
let paragrafo = document.querySelector (tag);
paragrafo.innerHTML = texto;
responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2}); 
};

function exibirMensagemInicial() {
escrevaTela('h1' , 'jogo numero secreto !! ');
escrevaTela ('p' , 'escolha um numero entre 1 e 5');
};
exibirMensagemInicial();

console.log(numeroSecreto);
console.log (tentativas);

function verificarChute() {
    let chute = document.querySelector ('input').value;
    if ( chute == numeroSecreto) {
        Palavratentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagenTentativa =` voce descobriu o numero secreto com  ${tentativas} ${Palavratentativas}`;
       escrevaTela ('h1' , ' acertou !!!');
       escrevaTela ('p', mensagenTentativa);       
     } else {
       if (chute > numeroSecreto) {
       escrevaTela ('p', 'o numero secreto é menor !');
     } else {
            escrevaTela ('p', 'o numero serceto é maior ');
        };
        tentativas++;
        limpaTela();
    }; 
};

function numeroAleatorio (){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosSorteados == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};

function limpaTela (){
    chute = document.querySelector ('input');
    chute.value = '';
};
 
    document.getElementById('reiniciar').removeAttribute('disabled');

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    limpaTela()
};
