export function calcularEquacao (a, b, c, resultado) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        resultado.textContent = "Digite valores válidos";
    } else {
        let delta = ((b * b) - 4 * a * c);

        if (delta < 0) {
            resultado.textContent = "Delta negativo. Não existem raízes reais.";
            return;
        }

        let x1 = (-b + (delta ** 0.5)) / (2 * a);
        let x2 = (-b - (delta ** 0.5)) / (2 * a);

        resultado.innerHTML = `Resultado da equação:<br>x': ${x1}<br>x'': ${x2}`;
    }
}
