import formas from '../../../json/formas.json' assert { type: 'json' };
const pagamentoID = document === null || document === void 0 ? void 0 : document.getElementById("formas-pagamento");
const envioID = document === null || document === void 0 ? void 0 : document.getElementById("formas-envio");
const integracoesID = document === null || document === void 0 ? void 0 : document.getElementById("formas-integracoes");
function pagamentoHTML() {
    const formaPagamento = formas.pagamento;
    pagamentoID.innerHTML = "";
    for (let i = 0; i < formaPagamento.length; i++) {
        const elementoPagamento = `
        <div class="flex flex-col bg-white items-center text-center rounded-md shadow-md">
            <img src="../../${formaPagamento[i].imagem}" alt=${formaPagamento[i].id}></img>
            <p class="text-lg mb-3">${formaPagamento[i].nome}</p>
            <button type="button" class="bg-[#20B9AE] text-white">Selecionar</button>
        </div>
        `;
        pagamentoID.innerHTML += elementoPagamento;
    }
}
if (pagamentoID) {
    pagamentoHTML();
}
