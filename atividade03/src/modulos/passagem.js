export function calcularPassagem(kmPassagem, pPassagem) {
    if (isNaN(kmPassagem) || kmPassagem <= 0) {
        pPassagem.textContent = "Digite um valor válido";
        return;
    }

    let valorPassagem = 0;

    if (kmPassagem <= 200) {
        valorPassagem = kmPassagem * 0.70;
    } else {
        valorPassagem = kmPassagem * 0.40;
    }

    pPassagem.innerHTML = `
        Na distância de ${kmPassagem} km a passagem custará R$${valorPassagem.toFixed(2)}
    `;
}
