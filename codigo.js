let inputs = document.querySelectorAll('input[type="text"]');
const divinputs = document.querySelector('.inputtexts');
const botaosalvar = document.querySelector('#botaosalvar');
const botaomais = document.querySelector('#botaomais');

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
            }
            if (event.code === 'Backspace') {
                
                console.log("funciona")
            }
        })

    inputs = document.querySelectorAll('input[type="text"]');
    console.log(inputs);
}


inputs[inputs.length - 1].addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        apertarTeclasEspecificas(inputs.length);
        
    }
})
