document.addEventListener('DOMContentLoaded', () => {
    const senha = document.getElementById('senha');
    const forca = document.getElementById('forca');

    senha.addEventListener('input', () => {
        const valor = senha.value;

        const temMaiuscula = /[A-Z]/.test(valor);
        const temMinuscula = /[a-z]/.test(valor);
        const temNumero = /[0-9]/.test(valor);
        const tamanhoOk = valor.length >= 8;

        if (temMaiuscula && temMinuscula && temNumero && tamanhoOk) {
            forca.textContent = "Força: Forte";
            forca.style.color = "green";
        } else {
            forca.textContent = "Força: Fraca";
            forca.style.color = "red";
        }
    });
});
