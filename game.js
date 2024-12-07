let tempoRestante = 120;
let pontuacao = 0;
let numero1, numero2, operador, respostaCerta;

const tempoElemento = document.getElementById('tempo');
const pontuacaoElemento = document.getElementById('pontuacao');
const perguntaElemento = document.getElementById('pergunta');
const respostaInput = document.getElementById('resposta');
const resultadoElemento = document.getElementById('resultado');
const reiniciarBotao = document.getElementById('reiniciar');
const responderBotao = document.getElementById('responder');

// Gera uma nova pergunta
function novaPergunta() {
    numero1 = Math.floor(Math.random() * 10) + 1;
    numero2 = Math.floor(Math.random() * 10) + 1;
    operador = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    
    if (operador === '+') {
        respostaCerta = numero1 + numero2;
    } else if (operador === '-') {
        respostaCerta = numero1 - numero2;
    } else {
        respostaCerta = numero1 * numero2;
    }

    perguntaElemento.textContent = `${numero1} ${operador} ${numero2} = ?`;
}

// Verifica a resposta do jogador
function verificarResposta() {
    const resposta = parseInt(respostaInput.value, 10);

    if (resposta === respostaCerta) {
        pontuacao++;
        pontuacaoElemento.textContent = `Pontos: ${pontuacao}`;
        resultadoElemento.textContent = 'Resposta Correta!';
        resultadoElemento.style.color = 'green';
    } else {
        resultadoElemento.textContent = 'Resposta Errada!';
        resultadoElemento.style.color = 'red';
    }

    respostaInput.value = '';
    novaPergunta();
}

// Atualiza o tempo
function atualizarTempo() {
    if (tempoRestante > 0) {
        tempoRestante--;
        tempoElemento.textContent = `Tempo: ${tempoRestante}s`;
        setTimeout(atualizarTempo, 1000);
    } else {
        tempoElemento.textContent = 'Fim de Jogo!';
        responderBotao.disabled = true;
        reiniciarBotao.style.display = 'inline-block';
    }
}

// Reinicia o jogo
function reiniciarJogo() {
    tempoRestante = 120;
    pontuacao = 0;
    respostaInput.value = '';
    resultadoElemento.textContent = '';
    responderBotao.disabled = false;
    reiniciarBotao.style.display = 'none';
    novaPergunta();
    atualizarTempo();
}

// Inicializa o jogo
novaPergunta();
atualizarTempo();

// Adiciona o evento de responder
responderBotao.addEventListener('click', verificarResposta);
