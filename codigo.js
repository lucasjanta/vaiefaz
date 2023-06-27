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
    var totalitens = localStorage.length;
    var nomesChaves = [];
    
    for (var i = 0; i < totalitens; i++) {
        nomesChaves.push(localStorage.key(i));
    }
    
    console.log(nomesChaves);
    return nomesChaves;
}


inputs[inputs.length - 1].addEventListener('keypress', (event) => {
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
        localStorage.setItem(`${inputs[0].value}`, inputs[1].value); //salva o nome das chaves
    } else {
        for (let i = 0; i < nomesChaves.length; i++) { //percorre o array
            if (inputs[0].value === nomesChaves[i]) { //se o nome da chave for igual ao input
                var valorAtual = localStorage.getItem(nomesChaves[i]); //pega o valor da chave
                valorAtual = JSON.stringify(valorAtual);
                console.log(valorAtual);
                var arrayItens;
                if (valorAtual === null || valorAtual === '') {
                    arrayItens = [];
                } else {
                arrayItens = JSON.parse(valorAtual);
                }
                arrayItens.push(inputs[1].value);
                var valorAtualizado = JSON.stringify(arrayItens);
                localStorage.setItem(`${nomesChaves[i]}`, valorAtualizado);
            } else{
                localStorage.setItem(`${inputs[0].value}`, inputs[1].value);
                
            }
        }
    }
    
    guardarNomesChaves();
    
})


