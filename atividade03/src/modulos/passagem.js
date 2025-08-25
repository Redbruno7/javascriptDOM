export function calcularPassagem(kmPassagem, pPassagem) {
    let valorPassagem = 0;
    if (isNaN(kmPassagem) || kmPassagem <= 0) {
        pPassagem.textContent = "Digite um valor válido";
    } else if (kmPassagem <= 200) {
        valorPassagem = kmPassagem * 0.70
        pPassagem.innerHTML = `
        Na distância de ${kmPassagem}km a passagem custará R$${valorPassagem.toFixed(2)}
        `
    } else {
        valorPassagem = kmPassagem * 0.40
        pPassagem.innerHTML = `
        Na distância de ${kmPassagem}km a passagem custará R$${valorPassagem.toFixed(2)}
        `
    }}