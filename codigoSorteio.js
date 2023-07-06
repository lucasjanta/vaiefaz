const atividades = JSON.parse(localStorage.getItem("jsonUnico"));
const palavras = document.querySelector(".palavras");
const verbosa = document.querySelector(".verbos");


console.log(atividades);
var verbos = [];
for (let i = 0; i < atividades.length; i++) {
    //cor aleatoria
    /* var cor = gerarCorVibrante(); */
    verbos.push(atividades[i].verbo);
}

console.log(verbos);

/* function gerarCorVibrante() {
    var hue = Math.floor(Math.random() * 360); // Componente vermelho (0-255)
    var saturation = "100%"; // Componente verde (0-255)
    var lightness = "50%"; // Componente azul (0-255)
  
    var cor = `hsl(` + hue + `, ` + saturation + `, ` + lightness +`)`;
    return cor;
  } */

function repetiçãoLista(quantidadeElementos){
    //copiar elemento sliderPalavras
    if (quantidadeElementos === 4) {
        //remover o primeiro elemento
        document.querySelectorAll(".sliderPalavras")[0].remove();
    } else if (quantidadeElementos < 4) {
        var sliderauxiliar = sliderPalavras.cloneNode(true);
        /* sliderauxiliar.classList.add("sliderPalavras"); */
        palavras.appendChild(sliderauxiliar);
    }
    

}
  
function mostrarAtividades(){
    var arraydeatividades = sliderPalavras.childNodes;
    /* sliderPalavras.childNodes[1].getBoundingClientRect().x;
    Posição X dos elementos*/
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

    
    
}

mostrarAtividades();

