const atividades = JSON.parse(localStorage.getItem("jsonUnico"));
const campoVerbos = document.querySelector(".verbos");
const campoPalavras = document.querySelector(".palavras");
const botaoDice = document.querySelector(".botaogerador");



console.log(atividades);
var verbos = [];
for (let i = 0; i < atividades.length; i++) {
    //cor aleatoria
    /* var cor = gerarCorVibrante(); */
    verbos.push(atividades[i].verbo);
}

console.log(verbos);

function selecionarVerbo() {
    campoVerbos.innerHTML = "";
    var verbo = verbos[Math.floor(Math.random() * verbos.length)];
    var newVerbo = document.createElement("h3");
    newVerbo.textContent = verbo;
    campoVerbos.appendChild(newVerbo);
    return verbo;
}

function selecionarPalavra(verbo) {
    campoPalavras.innerHTML = "";
    for (let i = 0; i < atividades.length; i++) {
        if (verbo === atividades[i].verbo) {
            var palavrasPossiveis = [];
            for (let u = 0; u < atividades[i].palavras.length; u++) {
                palavrasPossiveis.push(atividades[i].palavras[u]);
            }
        }
    }
    var palavra = palavrasPossiveis[Math.floor(Math.random() * palavrasPossiveis.length)];
    var newPalavra = document.createElement("h3");
    newPalavra.textContent = palavra;
    campoPalavras.appendChild(newPalavra);
    return palavra;
}

/* function selecionarPalavra(verbo) {
    var palavra = atividades[Math.floor(Math.random() * atividades.length)].palavras[Math.floor(Math.random() * atividades[i].palavras.length)];
    campoPalavras.textContent = palavra;
    return palavra;
} */

botaoDice.addEventListener("click", () => {
    let contador = 0;
    const intervaloVerbo = setInterval(() => {
        contador++;
        selecionarVerbo();
        if (contador >= 15) {
            clearInterval(intervaloVerbo);
            var verbo = selecionarVerbo();
            let contador2 = 0;
            const intervaloPalavra = setInterval(() => {
                contador2++;
                selecionarPalavra(verbo);
                if (contador2 >= 15) {
                    clearInterval(intervaloPalavra);
                    var palavraEscolhida = document.querySelector('.palavras h3');

                    if (palavraEscolhida.scrollWidth > campoPalavras.clientWidth) {
                    // O elemento está em overflow horizontal
                    console.log('O elemento está em overflow horizontal.');
                    palavraEscolhida.classList.add('efeitooverflowpalavra');
                    } else {
                    // O elemento não está em overflow horizontal
                    console.log('O elemento não está em overflow horizontal.');
                    }
                }
            }, 100)
        }
    }, 100);
    /* const intervaloPalavra = setInterval(selecionarPalavra, 100); */
    /* var verbo = selecionarVerbo();
    var palavra = selecionarPalavra(verbo); */
    
    
    
})

let temporizadorID;
let minutos = 25;
let segundos = 0;

const temporizadorElement = document.getElementById("temporizador");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnStop = document.getElementById("btnStop");

function iniciarTemporizador(){
    temporizadorID = setInterval(decrementarTempo, 1000);
    atualizarTemporizador();
    configurarBotoes(false, true, true);
}

function pausarTemporizador() {
    clearInterval(temporizadorID);
    configurarBotoes(true, false, true);
  }
  
  function pararTemporizador() {
    clearInterval(temporizadorID);
    minutos = 25;
    segundos = 0;
    atualizarTemporizador();
    configurarBotoes(true, false, false);
  }
  
  function decrementarTempo() {
    if (segundos === 0) {
      if (minutos === 0) {
        clearInterval(temporizadorID);
        alert("Tempo esgotado!");
        configurarBotoes(true, false, false);
        return;
      }
      minutos--;
      segundos = 59;
    } else {
      segundos--;
    }
    atualizarTemporizador();
  }
  
  function atualizarTemporizador() {
    temporizadorElement.textContent = formatarTempo(minutos, segundos);
  }
  
  function formatarTempo(minutos, segundos) {
    return `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  }
  
  function configurarBotoes(play, pause, stop) {
    btnPlay.disabled = !play;
    btnPause.disabled = !pause;
    btnStop.disabled = !stop;
  }
  
  btnPlay.addEventListener("click", iniciarTemporizador);
  btnPause.addEventListener("click", pausarTemporizador);
  btnStop.addEventListener("click", pararTemporizador);