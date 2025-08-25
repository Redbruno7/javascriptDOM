export function verificarVelocidade(vVelocidade, pVelocidade) {
    vVelocidade = Number(vVelocidade);

    if (isNaN(vVelocidade) || vVelocidade <= 0) {
        pVelocidade.textContent = "Digite uma velocidade válida!";
    } else if (vVelocidade <= 60) {
        pVelocidade.textContent = `Sua velocidade é ${vVelocidade} km/h. Você está dentro do limite de velocidade!`;
    } else {
        pVelocidade.textContent = `Sua velocidade é ${vVelocidade} km/h. Você está acima do limite! O limite é 60 km/h.`;
    }
}
