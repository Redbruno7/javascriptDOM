document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const resultado = document.getElementById('resultado');

    const calcular = (operacao) => {
        const valor1 = parseFloat(num1.value);
        const valor2 = parseFloat(num2.value);

        if (isNaN(valor1) || isNaN(valor2)) {
            resultado.textContent = 'Digite dois números válidos.';
            return;
        }

        let res;

        switch (operacao) {
            case '+': 
                res = valor1 + valor2; 
                break;

            case '-': 
                res = valor1 - valor2; 
                break;

            case '*':
                res = valor1 * valor2;
                break;

            case '/':
                res = valor2 !== 0 ? valor1 / valor2: "Erro: divisão por zero.";
                break;
        };

        resultado.textContent = `Resultado: ${res}`;
    };

    document.getElementById('btnSoma').addEventListener('click', () => calcular('+'));
    document.getElementById('btnSub').addEventListener('click', () => calcular('-'));
    document.getElementById('btnMult').addEventListener('click', () => calcular('*'));
    document.getElementById('btnDiv').addEventListener('click', () => calcular('/'));
});