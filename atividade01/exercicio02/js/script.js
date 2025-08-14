document.addEventListener('DOMContentLoaded', () => {
    const numero = document.getElementById('numero');
    const mensagem = document.getElementById('mensagem')

    document.getElementById('btnVerificar').addEventListener('click', () => {
        const valor = parseFloat(numero.value);

        if (isNaN(valor)) {
            mensagem.textContent = 'Por favor, digite um número válido.';
            return;
        }

        if (valor > 0) {
            mensagem.textContent = 'O número é POSITIVO.';
        } else if (valor < 0) {
            mensagem.textContent = 'O número é NEGATIVO.';
        } else {
            mensagem.textContent = 'O número é ZERO.';
        }
    });
});