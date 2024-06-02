import formas from '../../../json/formas.json' with {type: 'json'}

type Forma = {
    id: number,
    imagem: string,
    nome: string, 
}

const pagamentoID = <HTMLDivElement>document?.getElementById("formas-pagamento");
const envioID = <HTMLDivElement>document?.getElementById("formas-envio");
const integracoesID = <HTMLDivElement>document?.getElementById("formas-integracoes");

//Condiciona as estilização de certos elementos na página 'envio.html'
const condicionalEnvio =  (i:number):string =>{
    if((i%2 === 1 && i<4) || i>7) return 'class="w-28 h-20"';
    else if(i === 2) return 'class="w-36 h-12 mt-5 mb-1"';
    else return 'class="size-20"';
}

//Condiciona as estilização de certos elementos na página 'integracoes.html'
const condicionalIntegracoes = (i:number):string =>{
    if(i === 1) return 'class="size-20 rounded-full overflow-hidden"';
    else if(i>2) return 'class="w-32 h-20"';
    else return 'class="size-20"';
}

//Cria os divs de elementos pagamento
function pagamentoHTML(){
    const formaPagamento:Forma[] = formas.pagamento;

    pagamentoID.innerHTML = "";

    //Continue refazendo o código até fica do jeito correto
    for(let i = 0; i<formaPagamento.length; i++){
        const elementoHTML = `
        <div class="flex flex-col w-full p-3 bg-white items-center text-center rounded-md shadow-md">
            <img src="${formaPagamento[i].imagem}" alt=${formaPagamento[i].id}
            class="size-20"></img>
            <p class="text-lg font-bold text-wrap mt-1.5 mb-3">${formaPagamento[i].nome}</p>
            <button type="button" 
            class="bg-[${i===0?"#3E70C9":"#20B9AE"}] text-white px-5 py-2 rounded-sm justify-self-center
            hover:bg-opacity-75">
            ${i===0?"Selecionado":"Selecionar"}
            </button>
        </div>
        `

        pagamentoID.innerHTML += elementoHTML;
    }
}

//Cria os divs de elementos envio
function envioHTML(){
    const formaEnvio:Forma[] = formas.envio;

    envioID.innerHTML = "";

    //Continue refazendo o código até fica do jeito correto
    for(let i = 0; i<formaEnvio.length; i++){
        const elementoHTML = `
        <div class="flex flex-col w-full p-3 bg-white items-center text-center rounded-md shadow-md">
            <img src="${formaEnvio[i].imagem}" alt=${formaEnvio[i].id}
            ${condicionalEnvio(i)}></img>
            <p class="text-lg font-bold text-wrap mt-1.5 mb-3">${formaEnvio[i].nome}</p>
            <button type="button" 
            class="bg-[${i===0?"#3E70C9":"#20B9AE"}] text-white px-5 py-2 rounded-sm justify-self-center
            hover:bg-opacity-75">
            ${i===0?"Selecionado":"Selecionar"}
            </button>
        </div>
        `

        envioID.innerHTML += elementoHTML;
    }
}

//Cria os divs de elementos integrações
function integracoesHTML(){
    const formaIntegracoes:Forma[] = formas.integracoes;

    integracoesID.innerHTML = "";

    //Continue refazendo o código até fica do jeito correto
    for(let i = 0; i<formaIntegracoes.length; i++){
        const elementoHTML= `
        <div class="flex flex-col w-full p-3 bg-white items-center text-center rounded-md shadow-md">
            <img src="${formaIntegracoes[i].imagem}" alt=${formaIntegracoes[i].id}
            ${condicionalIntegracoes(i)}></img>
            <p class="text-lg font-bold text-wrap mt-1.5 mb-3">${formaIntegracoes[i].nome}</p>
            <button type="button" 
            class="bg-[${i===0?"#3E70C9":"#20B9AE"}] text-white px-5 py-2 rounded-sm justify-self-center
            hover:bg-opacity-75">
            ${i===0?"Selecionado":"Selecionar"}
            </button>
        </div>
        `

        integracoesID.innerHTML += elementoHTML;
    }
}

//Inicializar os divs se os IDs definidos existem na página
if(pagamentoID){pagamentoHTML();}
if(envioID){envioHTML();}
if(integracoesID){integracoesHTML();}