let inputs = document.querySelectorAll('input[type="text"]');
const divinputs = document.querySelector('.inputtexts');
const botaosalvar = document.querySelector('#botaosalvar');
const botaomais = document.querySelector('#botaomais');
const form = document.querySelector('.form');
const listaPalavras = document.querySelector('.listadepalavras');

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
            if (event.key === 'Backspace' && newElement.value.length === 0) {
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
    var chaves = [];
    
    for (var i = 0; i < localStorage.length; i++) {
        chaves.push(localStorage.key(i));
    }
    
    console.log(chaves);
    return chaves;
}

inputs[inputs.length - 1].addEventListener('keyup', (event) => {
    if (inputs[inputs.length - 1].value.includes(' ')) {
        inputs[inputs.length - 1].value = inputs[inputs.length - 1].value.replace(' ', '');
        apertarTeclasEspecificas(inputs.length);
    }
    /* if (event.keyCode === 32) {
        apertarTeclasEspecificas(inputs.length);
        
    } */
    
})

botaomais.addEventListener('click', () => {
    if (inputs.length === 1) {
        apertarTeclasEspecificas(inputs.length);
    }
})

botaosalvar.addEventListener('click', () => {
    var nomesChaves = guardarNomesChaves(); //guardar o nome das chaves em um array
    console.log(nomesChaves);
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
    adicionarAtividadeNaLista();
})

function adicionarAtividadeNaLista() {
    /* var atividade = document.createElement('div');
    atividade.classList.add('atividadeexemplo'); */
    var chaves = Object.keys(localStorage);
    for (let i = 0; i < chaves.length; i++) {
        console.log(chaves[i]);
        var atividadesChave = localStorage.getItem(chaves[i]);
        console.log(atividadesChave);
        
        
        
        
    }
    /* chaves.forEach((chave) => {
        console.log(chave);
        console.log(valores);
        var valores = localStorage.getItem(chave);
        var atividade = document.createElement('div');
        atividade.classList.add('atividade');
        atividade.innerHTML = `<h3>${chave}</h3>`;
        listaPalavras.appendChild(atividade);
        var atividadeFilha = document.createElement('div');
        atividadeFilha.classList.add('sliderAtividade');
        valores.forEach((valor) => {
            atividadeFilha.innerHTML = `<p>${valor}</p>`;
        })
        atividade.appendChild(atividadeFilha);
    }) */
    
}

