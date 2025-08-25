export function calcularParImpar(a, p) {  
    if (isNaN(a)) {
        p.textContent = "Digite um número válido!"
    } else if (a % 2 === 0) {
        p.textContent = "Este número é par!"
    } else {
        p.textContent = "Este número é ímpar!"
    }
}