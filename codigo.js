let inputs = document.querySelectorAll('input[type="text"]');
const divinputs = document.querySelector('.inputtexts');
const botaosalvar = document.querySelector('#botaosalvar');
const botaomais = document.querySelector('#botaomais');
const form = document.querySelector('.form');

function apertarTeclasEspecificas(inputcounter) {
        inputs[inputcounter - 1].disabled = true;
        var newElement = document.createElement('input');
        newElement.type = 'text';
        newElement.id = `p${inputcounter}`;
        divinputs.appendChild(newElement);
        newElement.focus();
        newElement.addEventListener('keyup', (event) => {
            //Tirar do comentário para sempre impossibilitar a edição do input anterior e criar um novo

            /* if (event.code === 'Space') {
                apertarTeclasEspecificas(inputs.length);
            } */
            if (event.code === 'Backspace' && newElement.value.length === 0) {
                voltaPalavras(newElement);
            }
            if (event.code === 'Enter' && inputs.length > 1) {
                botaosalvar.click();
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

function guardarNomesChaves() {
    var numerochaves = localStorage.length;
    var chaves = [];
    
    for (var i = 0; i < numerochaves; i++) {
        chaves.push(localStorage.key(i));
    }
    
    console.log(chaves);
    return chaves;
}


inputs[inputs.length - 1].addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        apertarTeclasEspecificas(inputs.length);
        
    }
})

botaomais.addEventListener('click', () => {
    if (inputs.length === 1) {
        apertarTeclasEspecificas(inputs.length);
    }
})

botaosalvar.addEventListener('click', () => {
    var nomesChaves = guardarNomesChaves(); //guardar o nome das chaves em um array
    if (nomesChaves.length === 0) { //se o array estiver vazio
        localStorage.setItem(`${inputs[0].value}`, JSON.stringify(inputs[1].value));//salva o nome das chaves
        nomesChaves = guardarNomesChaves();
        
    } else {
        var chaveExiste = false;
        for (let i = 0; i < nomesChaves.length; i++) { //percorre o array
            if (inputs[0].value === nomesChaves[i]) { //se o nome da chave for igual ao input
                console.log("ja existe");
                localStorage.setItem(`${inputs[0].value}`, [localStorage.getItem(`${inputs[0].value}`), JSON.stringify(inputs[1].value)]);
                chaveExiste = true;
        }
        
        }
        if(!chaveExiste){
            localStorage.setItem(`${inputs[0].value}`, JSON.stringify(inputs[1].value));
        }
    }
    
    guardarNomesChaves();
})


