document.addEventListener('DOMContentLoaded', () => {
    const entrada = document.getElementById('entrada');
    const tipo = document.getElementById('tipo');

    document.getElementById('btnMostrar').addEventListener('click', () => {
        const valor = entrada.value.trim();

        if (valor === "") {
            tipo.textContent = "Digite algum valor.";
            return;
        }

        let tipoDado;

        // Verifica se é número
        if (!isNaN(valor) && valor !== "") {
            tipoDado = "number";
        } 
        // Verifica se é boolean
        else if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
            tipoDado = "boolean";
        } 
        // Caso contrário, é string
        else {
            tipoDado = "string";
        }

        tipo.textContent = `Tipo: ${tipoDado}`;
    });
});
