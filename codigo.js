let inputs = document.querySelectorAll('input[type="text"]');
const divinputs = document.querySelector('.inputtexts');
const botaosalvar = document.querySelector('#botaosalvar');
const botaomais = document.querySelector('#botaomais');

function apertarEspaco(inputcounter) {
        inputs[inputcounter - 1].disabled = true;
        var newElement = document.createElement('input');
        newElement.type = 'text';
        newElement.id = `p${inputcounter}`;
        divinputs.appendChild(newElement);
        newElement.focus();
        newElement.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                apertarEspaco(inputs.length);
            }
        })

    inputs = document.querySelectorAll('input[type="text"]');
}


inputs[inputs.length - 1].addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        
        apertarEspaco(inputs.length);
        console.log(inputs);
    }
})



/* let inputcounter = inputs.length;
function addInput(inputcounter){
    inputs[inputcounter].addEventListener('keydown', (event) => {
        if (event.code === 'Space' || botaomais.click()) {
            inputcounter++;
            console.log("espaço pressionado")
            var newElement = document.createElement('input');
            newElement.type = 'text';
            newElement.id = `p${inputcounter}`;
            divinputs.appendChild(newElement);
            inputs = document.querySelectorAll('input[type="text"]');
            console.log(inputs);
            event.preventDefault();
            }
    })
}

botaomais.addEventListener('click', (event) => {
    addInput(inputcounter);
    event.preventDefault();
})


addInput(0); */
