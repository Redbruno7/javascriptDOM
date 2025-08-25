export function calcularMaiorMenor(a, b, c, resultado) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.textContent = "Preencha todos os campos com números válidos.";
    } else if (a === b && b === c) {
        resultado.textContent = "Todos os numeros são iguais!"
    } else {
        const maior = Math.max(a, b, c);
        const menor = Math.min(a, b, c);

        resultado.innerHTML = `O maior número é ${maior}<br>O menor número é ${menor}`;
    }
    
}
