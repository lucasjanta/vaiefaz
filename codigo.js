let inputs = document.querySelectorAll('input[type="text"]');
const divinputs = document.querySelector('.inputtexts');
const botaosalvar = document.querySelector('#botaosalvar');
const botaomais = document.querySelector('#botaomais');
const form = document.querySelector('.form');
var atividades = {};

function apertarTeclasEspecificas(inputcounter) {
        inputs[inputcounter - 1].disabled = true;
        var newElement = document.createElement('input');
        newElement.type = 'text';
        newElement.id = `p${inputcounter}`;
        divinputs.appendChild(newElement);
        newElement.focus();
        newElement.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                apertarTeclasEspecificas(inputs.length);
            }if (event.code === 'Backspace' && newElement.value.length === 0) {
                voltaPalavras(newElement);
                console.log("funciona")
            }
        })

    inputs = document.querySelectorAll('input[type="text"]');
    console.log(inputs);
}

function voltaPalavras(ultimoelemento) {
    ultimoelemento.remove();
    inputs = document.querySelectorAll('input[type="text"]');
    inputs[inputs.length - 1].disabled = false;
    inputs[inputs.length - 1].focus();
    
}

inputs[inputs.length - 1].addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        apertarTeclasEspecificas(inputs.length);
        
    }
})

