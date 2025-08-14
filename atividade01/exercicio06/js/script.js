document.addEventListener('DOMContentLoaded', () => {
    const palavraInput = document.getElementById('palavra');
    const mensagem = document.getElementById('mensagem');

    document.getElementById('btnVerificar').addEventListener('click', () => {
        const texto = palavraInput.value.trim().toLowerCase();

        if (texto === '') {
            mensagem.textContent = "Por favor, digite uma palavra.";
            return;
        }

        // Remove acentos e caracteres especiais
        const normalizado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Verifica se é palíndromo
        const reverso = normalizado.split('').reverse().join('');
        if (normalizado === reverso) {
            mensagem.textContent = `"${palavraInput.value}" é um PALÍNDROMO.`;
        } else {
            mensagem.textContent = `"${palavraInput.value}" NÃO é um palíndromo.`;
        }
    });
});
