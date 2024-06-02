import gestor_pedidos from '../../../json/pedidos.json' with { type: 'json' };
const pedidosDiv = document === null || document === void 0 ? void 0 : document.getElementById("pedidos");
const botao_laranja = `
    <button type="button" title="compartilhar">
        <div class="bg-[#F59345] h-full">
            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"
            class="size-6 fill-transparent p-1.5">
                <path d="M5.7518 10.4899C4.90645 9.71909 4.43404 8.62511 4.43404 7.4814C4.43404 5.21884 6.27393 3.37896 8.56135 3.37896H10.7245L8.76025 1.38989L9.28238 0.867764L12.1665 3.7519L9.28238 6.63604L8.76025 6.11392L10.7245 4.12485H8.56135C6.6966 4.12485 5.17994 5.64151 5.17994 7.4814C5.17994 8.4262 5.55289 9.32128 6.24906 9.96772L5.7518 10.4899ZM12.6638 7.23276V12.0811C12.6638 12.28 12.5146 12.4541 12.2908 12.4541H1.8234C1.59963 12.4541 1.45045 12.28 1.45045 12.0811V7.23276H0.679688V12.0811C0.679688 12.7027 1.20182 13.2 1.8234 13.2H12.2908C12.9124 13.2 13.4097 12.7027 13.4097 12.0811V7.23276H12.6638Z" fill="white"/>
            </svg>                                                                               
        </div>
    </button>
`;
const botao_azul = `
    <button type="button" title="ler">
        <div class="bg-[#3E70C9] h-full">
            <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg"
            class="size-6 fill-transparent p-1.5">
                <path d="M0.679688 0.549912V13.2053L2.19635 11.3406L3.34006 12.7578L4.45891 11.3406L5.57775 12.7578L6.6966 11.3406L7.81545 12.7578L8.9343 11.3406L10.4261 13.2053V0.549912H0.679688ZM9.68019 11.0671L8.9343 10.1471L7.81545 11.5643L6.6966 10.1471L5.57775 11.5643L4.45891 10.1471L3.34006 11.5643L2.22121 10.1471L1.42559 11.1168V1.29581H9.68019V11.0671ZM7.41764 3.53351H2.91738V2.78761H7.41764V3.53351ZM5.92584 6.54196H2.91738V5.79606H5.92584V6.54196ZM8.16354 5.05017H2.91738V4.30427H8.16354V5.05017ZM2.94225 8.03376H8.16354V8.77966H2.94225V8.03376Z" fill="white"/>
            </svg>                                                                                     
        </div>
    </button>
`;
const botao_preto = `
    <button type="button" title="eliminar">
        <div class="bg-[#36394F] h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
            class="size-6 fill-transparent stroke-white p-1.5">
                <path fill-rule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z" clip-rule="evenodd" />
            </svg>                                      
        </div>
    </button>
`;
const botao_roxo = `
    <button type="button" title="editar">
        <div class="bg-[#A567E2] h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            class="size-6 fill-transparent stroke-white p-1.5">
                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
            </svg>                                      
        </div>
    </button>
`;
const botao_verde = `
    <button type="button" title="entrega">
        <div class="bg-[#20B9AE] h-full">
            <svg viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg"
            class="size-6 fill-transparent p-1.5">
                <path d="M13.3091 0.787725H5.07936V3.05028H2.91625L2.02117 6.03388H0.579102V9.76337H2.0709V9.78823C2.0709 10.6087 2.74221 11.28 3.5627 11.28C4.40805 11.28 5.07936 10.6087 5.07936 9.78823V9.76337H8.80885V9.78823C8.80885 10.6087 9.48016 11.28 10.3255 11.28C11.146 11.28 11.8173 10.6087 11.8173 9.78823V9.76337H13.3091V0.787725ZM3.48811 3.79618H5.07936V6.03388H2.8168L3.48811 3.79618ZM3.5627 10.5341C3.16488 10.5341 2.8168 10.186 2.8168 9.78823C2.8168 9.36556 3.16488 9.04233 3.5627 9.04233C3.98537 9.04233 4.33346 9.36556 4.33346 9.78823C4.33346 10.186 3.98537 10.5341 3.5627 10.5341ZM10.3255 10.5341C9.90283 10.5341 9.55475 10.186 9.55475 9.78823C9.55475 9.36556 9.90283 9.04233 10.3255 9.04233C10.7233 9.04233 11.0714 9.36556 11.0714 9.78823C11.0714 10.186 10.7233 10.5341 10.3255 10.5341ZM12.5632 9.01747H11.5935C11.32 8.56993 10.8476 8.29644 10.3255 8.29644C9.77851 8.29644 9.30611 8.56993 9.03262 9.01747H4.85559C4.58209 8.56993 4.10969 8.29644 3.5627 8.29644C3.04057 8.29644 2.56816 8.56993 2.29467 9.01747H1.325V6.77978H5.82525V1.53362H12.5632V9.01747Z" fill="white"/>
            </svg>                                                                                                                     
        </div>
    </button>
`;
const modeloAçoes = (laranja, azul, preto, roxo, verde) => {
    let conjunto_botoes = "";
    if (laranja)
        conjunto_botoes += botao_laranja;
    if (azul)
        conjunto_botoes += botao_azul;
    if (preto)
        conjunto_botoes += botao_preto;
    if (roxo)
        conjunto_botoes += botao_roxo;
    if (verde)
        conjunto_botoes += botao_verde;
    return conjunto_botoes;
};
function modeloAçoesSwitch(tipo_modelo) {
    switch (tipo_modelo) {
        case 1:
            //botões ativos: azul, preto, roxo, verde
            return modeloAçoes(false, true, true, true, true);
        case 2:
            //botões ativos: laranja, azul, preto, verde 
            return modeloAçoes(true, true, true, false, true);
        case 3:
            //botões ativos: azul, preto, verde
            return modeloAçoes(false, true, true, false, true);
        case 4:
            //botões ativos: laranja,azul, preto
            return modeloAçoes(true, true, true, false, false);
        default:
            //botões ativos: azul, preto
            return modeloAçoes(false, true, true, false, false);
    }
}
function modeloEnviado(enviado, data, link) {
    if (enviado == "SIM") {
        return `
        <span class=" h-fit font-semibold text-[0.5rem]">
            <span class="w-fit text-white bg-[#43B968] p-1
            rounded-2xl">
            SIM
            </span> <br>
            ${data} <br>
            <a href="${link} class="apperance-none !text-[#0275D8]">VER COMPROVANTE</a>
        </span>
        `;
    }
    return `
        <span 
            class="w-fit text-white font-semibold text-[0.5rem] bg-[#F44236] p-1
            rounded-2xl">
                Não
        </span>
    `;
}
function mostrarPedidos() {
    const pedidos = gestor_pedidos.pedidos;
    pedidosDiv.innerHTML = "";
    for (let i = 0; i < pedidos.length; i++) {
        const elementoHTML = `
        <div class="bg-[${pedidos[i].bg_row_cor}] grid grid-cols-12 *:py-1.5 *:text-center divide-x-2 divide-y-2">
            <div>
                <input type="checkbox" name="${pedidos[i].n_pedido}" id="${pedidos[i].id_interno}" 
                title="${pedidos[i].id_interno}" class="border-2">
            </div>
            <span class="text-[0.8rem]">${pedidos[i].id_interno}</span>
            <p class="text-[0.7rem] font-bold">${pedidos[i].n_pedido}</p>
            <p class="text-[0.7rem] font-bold">${pedidos[i].envio_pagamento.envio} <br> 
            ${pedidos[i].envio_pagamento.pagamento}</p>
            <p class="text-[0.7rem] font-bold">${pedidos[i].valor_quantidade.valor} <br>
            ${pedidos[i].valor_quantidade.quantidade}</p>
            <p class="text-[0.55rem]">${pedidos[i].loja_vendedor.loja} <br> <strong>
            ${pedidos[i].loja_vendedor.vendedor}</strong></p>
            <p class="text-[0.55rem]">${pedidos[i].cliente.nome} <br> <strong>
            ${pedidos[i].cliente.telefone}</strong></p>
            <span class="text-[0.55rem] text-center">
            ${pedidos[i].cadastro_status.cadastro} <br>
                <span 
                class="w-fit text-white font-semibold text-[0.5rem] 
                bg-[${pedidos[i].cadastro_status.status.cor}] p-0.5">
                ${pedidos[i].cadastro_status.status.titulo}
                </span>
            </span>
            <div>
                ${modeloEnviado(pedidos[i].enviado.titulo, pedidos[i].enviado.data, pedidos[i].enviado.link)}
            </div>
            <div>
                <span 
                class="w-fit text-white font-semibold text-[0.5rem] bg-[#F44236] p-1
                rounded-2xl">
                    Não
                </span>
            </div>
            <div>
                <span 
                class="w-fit text-white font-semibold text-[0.5rem] bg-[#F44236] p-1
                rounded-2xl">
                    Não
                </span>
            </div>
            <div class="flex items-center justify-center py-2">
                ${modeloAçoesSwitch(pedidos[i].açoes)}
            </div>
        </div>
        `;
        pedidosDiv.innerHTML += elementoHTML;
    }
}
mostrarPedidos();
