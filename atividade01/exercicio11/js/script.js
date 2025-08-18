document.addEventListener('DOMContentLoaded', () => {
    const numero = document.getElementById('numero');
    const lista = document.getElementById('tabuada');

    document.getElementById('btnGerar').addEventListener('click', () => {
        const valor = parseInt(numero.value);

        if (isNaN(valor)) {
            lista.innerHTML = "<li>Digite um número válido!</li>";
            return;
        }

        lista.innerHTML = "";
        for (let i = 1; i <= 10; i++) {
            const li = document.createElement('li');
            li.textContent = `${valor} x ${i} = ${valor * i}`;
            lista.appendChild(li);
        }
    });
});
