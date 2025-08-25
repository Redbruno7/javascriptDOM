export function verificarVelocidade (vVelocidade, pVelocidade) {
    if (isNaN(vVelocidade)) {
        pVelocidade.textContent = "Digite um número válido!"
    } else if (vVelocidade < 60) {
        pVelocidade.textContent = "Você está dentro do límite de velocidade!"
    } else {
        pVelocidade.textContent = "Você está fora do límite de velocidade! O limite é 60km/h"
    }
}
