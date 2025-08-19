document.addEventListener('DOMContentLoaded', () => {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1; // número entre 1 e 10
    const palpite = document.getElementById('palpite');
    const resultado = document.getElementById('resultado');

    document.getElementById('btnChutar').addEventListener('click', () => {
        const valor = parseInt(palpite.value);

        if (isNaN(valor) || valor < 1 || valor > 10) {
            resultado.textContent = "Digite um número válido entre 1 e 10.";
            return;
        }

        if (valor === numeroSecreto) {
            resultado.textContent = `Parabéns! Você acertou, o número era ${numeroSecreto}.`;
        } else if (valor < numeroSecreto) {
            resultado.textContent = "O número secreto é MAIOR.";
        } else {
            resultado.textContent = "O número secreto é MENOR.";
        }
    });
});
