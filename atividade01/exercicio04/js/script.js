document.addEventListener('DOMContentLoaded', () => {
    const quadrado = document.getElementById('quadrado');

    document.getElementById('btnVermelho').addEventListener('click', () => {
        quadrado.style.backgroundColor = 'red';
    });

    document.getElementById('btnVerde').addEventListener('click', () => {
        quadrado.style.backgroundColor = 'green';
    });

    document.getElementById('btnAzul').addEventListener('click', () => {
        quadrado.style.backgroundColor = 'blue';
    });
});
