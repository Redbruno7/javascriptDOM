export function verificarTriangulo(a, b, c, pTriangulo) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        pTriangulo.textContent = "Coloque valores válidos";
    } else if (a + b > c && b + c > a && a + c > b) {
        pTriangulo.textContent = "É possível fazer um triângulo com estes valores";
    } else {
        pTriangulo.textContent = "Não é possível fazer um triângulo com estes valores";
    }
}
