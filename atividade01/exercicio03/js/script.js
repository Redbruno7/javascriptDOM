document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById('texto');
    const contador = document.getElementById('contador');

    texto.addEventListener('input', () => {
        const quantidade = texto.value.length;
        contador.textContent = `Caracteres: ${quantidade}`;
    });
});
