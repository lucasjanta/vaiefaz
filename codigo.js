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

function atualizarLista(listadeatividades){
    listaPalavras.innerHTML = `<p class="atividadestitulo">Atividades</p>`;
    for (let i = 0; i < listadeatividades.length; i++) {
        console.log(listadeatividades[i]);
        var novoElemento = document.createElement('div');
        novoElemento.classList.add('atividade');
        listaPalavras.appendChild(novoElemento);
        var novoVerbo = document.createElement('h3');
        novoVerbo.textContent = listadeatividades[i].verbo;
        novoElemento.appendChild(novoVerbo);
        var novoSlider = document.createElement('div');
        novoSlider.classList.add('sliderAtividade');
        novoElemento.appendChild(novoSlider);
        for (let u = 0; u < listadeatividades[i].palavras.length; u++) {
            var novaPalavra = document.createElement('p');
            novaPalavra.textContent = listadeatividades[i].palavras[u];
            novoSlider.appendChild(novaPalavra); 
        }
        
    }
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
    const atividadesExistentes = JSON.parse(localStorage.getItem("jsonUnico")); //recupera as atividades como objeto em javascript

    const atividades = [{
        verbo: inputs[0].value,
        palavras: [
            inputs[1].value
        ]
    }] //armazena a última atividade adicionada em um objeto
    
    if (atividadesExistentes === null) { //se não existirem atividades
        localStorage.setItem("jsonUnico", JSON.stringify(atividades));//adiciona ao localStorage
    } else {
        var verbos = []; //Array para salvar os verbos existentes
    for (let i = 0; i < atividadesExistentes.length; i++) { //itera pelos verbos
        verbos += atividadesExistentes[i].verbo;//Adiciona cada verbo ao array
        if (atividadesExistentes[i].verbo.includes(atividades[0].verbo[0])) { //se já existirem atividades com o verbo adicionado
            console.log("existe um verbo assim");
                if(atividadesExistentes[i].palavras.includes(atividades[0].palavras[0])) { //se já existe a atividade
                    alert("Essa atividade já existe");
                } else{
                    atividadesExistentes[i].palavras.push(atividades[0].palavras[0]); //adiciona a palavra ao verbo
                    localStorage.setItem("jsonUnico", JSON.stringify(atividadesExistentes));//salva as atividades
                    alert("Atividade adicionada");
                }
            }
        } 
        if (!verbos.includes(atividades[0].verbo[0])) { //se o verbo não existir
            atividadesExistentes.push(atividades[0]);
            localStorage.setItem("jsonUnico", JSON.stringify(atividadesExistentes)); //adicionar a atividade com o verbo
        }
        console.log(verbos);



        

        
    }
        
    atualizarLista(JSON.parse(localStorage.getItem("jsonUnico")));
    
}
    

    /* localStorage.setItem("jsonUnico", JSON.stringify(atividades)); */
)


function adicionarAtividadeNaLista() {
    /* var atividade = document.createElement('div');
    atividade.classList.add('atividadeexemplo'); */
    var chaves = Object.keys(localStorage);
    for (let i = 0; i < chaves.length; i++) {
        console.log(chaves[i]);
        var atividadesChave = localStorage.getItem(chaves[i]);
        console.log(atividadesChave);
        
        
        
        
    }
    
    
}





/* botaosalvar.addEventListener('click', () => {
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
}) */
