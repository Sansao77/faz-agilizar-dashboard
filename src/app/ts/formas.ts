import formas from '../../../json/formas.json' assert {type: 'json'}

type Forma = {
    id: number,
    imagem: string,
    nome: string, 
}

const pagamentoID = <HTMLDivElement>document?.getElementById("formas-pagamento");
const envioID = <HTMLDivElement>document?.getElementById("formas-envio");
const integracoesID = <HTMLDivElement>document?.getElementById("formas-integracoes");


function pagamentoHTML(){
    const formaPagamento:Forma[] = formas.pagamento;

    pagamentoID.innerHTML = "";

    //Continue refazendo o código até fica do jeito correto
    for(let i = 0; i<formaPagamento.length; i++){
        const elementoPagamento = `
        <p class="text-xs font-bold mb-2.5"></p>
        <div class="flex flex-col bg-white items-center text-center rounded-md shadow-md">
            <img src="../../${formaPagamento[i].imagem}" alt=${formaPagamento[i].id}></img>
            <p class="text-lg mb-3">${formaPagamento[i].nome}</p>
            <button type="button" class="bg-[#20B9AE] text-white">Selecionar</button>
        </div>
        `

        pagamentoID.innerHTML += elementoPagamento;
    }
}

if(pagamentoID){
    pagamentoHTML();
}