let = listaDeNumerosSorteados = [];
let = numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'escoha um número de 1 a 10');

}


exibirMensagemInicial();

// function é a função desempenha a função de certo atributo do site como um botão
function verificarChute() {

    //input é a caixa de texto do úsuario / o value serve para acessar informações dadas pelo usuario, abaixo .value atribui-se ao valor do input 
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? ' tentativas' : ' tentativa';
        exibirTextoNaTela('p', 'você acertou o número secreto com ' + tentativas + palavraTentativas);
        // getElementById serve para buscar um id do html / removeAttribute serve para tirar um atributo de um campo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', "errou :( ");
            exibirTextoNaTela('p', "o número secreto é menor que " + chute);
        } else {
            exibirTextoNaTela('h1', "errou :( ");
            exibirTextoNaTela('p', 'o número secreto é maior que ' + chute);
        }

        tentativas++;

        limparCampo();
    }
}

//return serve para enviar o conteudo de uma função para uma variavel
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido; '';
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciaJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}