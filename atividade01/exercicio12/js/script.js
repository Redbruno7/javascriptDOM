document.addEventListener('DOMContentLoaded', () => {
    let tempo = 10;
    const contador = document.getElementById('contador');

    const intervalo = setInterval(() => {
        contador.textContent = tempo;
        tempo--;

        if (tempo < 0) {
            clearInterval(intervalo);
            contador.textContent = "Tempo esgotado!";
        }
    }, 1000);
});
