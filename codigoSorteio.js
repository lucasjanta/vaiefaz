const atividades = JSON.parse(localStorage.getItem("jsonUnico"));
const sliderPalavras = document.querySelector(".sliderPalavras");
console.log(atividades);
var verbos = [];
for (let i = 0; i < atividades.length; i++) {
    //cor aleatoria
    Math.floor(Math.random() * 16777215).toString(16);
    var cor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    verbos.push(atividades[i].verbo);
    var novoVerbo = document.createElement('p');
    novoVerbo.style.backgroundColor = cor;
    novoVerbo.textContent = atividades[i].verbo;
    sliderPalavras.appendChild(novoVerbo);
}
console.log(verbos);

