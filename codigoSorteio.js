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
                }
            }, 100)
        }
    }, 100);
    /* const intervaloPalavra = setInterval(selecionarPalavra, 100); */
    /* var verbo = selecionarVerbo();
    var palavra = selecionarPalavra(verbo); */

    
    
})




/* function gerarCorVibrante() {
    var hue = Math.floor(Math.random() * 360); // Componente vermelho (0-255)
    var saturation = "100%"; // Componente verde (0-255)
    var lightness = "50%"; // Componente azul (0-255)
  
    var cor = `hsl(` + hue + `, ` + saturation + `, ` + lightness +`)`;
    return cor;
  } */


  
/* function mostrarAtividades(){
    var arraydeatividades = sliderPalavras.childNodes;
   
    var larguraTela = window.innerWidth;
    var xminimo = (larguraTela / 100) * 15;
    var xmaximo = (larguraTela / 100) * 85;
    console.log("Minimo da tela: " + xminimo + "     " + "Maximo da tela: " + xmaximo);

    setInterval((palavraatual) => {
        for (let i = 1; i < arraydeatividades.length; i++) {

            var posicaoxdapalavra = arraydeatividades[i].getBoundingClientRect().x + (arraydeatividades[i].getBoundingClientRect().width / 2);
            if (posicaoxdapalavra > xminimo && posicaoxdapalavra < xmaximo) {
                palavraatual = arraydeatividades[i].textContent;
            }
        }
        for (let i = 0; i < atividades.length; i++) {
            if (palavraatual === atividades[i].verbo) {
                atividadesEx.innerHTML = "";
                for (let u = 0; u < atividades[i].palavras.length; u++) {
                    var atividadesLoop = document.createElement('p');
                    
                    atividadesLoop.textContent = atividades[i].palavras[u];
                    atividadesEx.appendChild(atividadesLoop);
                }
                

            }
        
        }
    }, 100);

    
    
} */



