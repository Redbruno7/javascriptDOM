export function verificarSalario(vSalario, pSalario) {
    let novoSalario = 0;
    
    if (isNaN(vSalario) || vSalario <= 0) {
        pSalario.textContent = "Digite um número válido!";
    } else if (vSalario < 1000) {
        novoSalario = vSalario + (vSalario * 0.10);
        pSalario.textContent = `Você recebeu um aumento de 10%. Salário após o aumento: R$${novoSalario.toFixed(2)}`;
    } else if (vSalario > 1500) {
        novoSalario = vSalario + (vSalario * 0.05);
        pSalario.textContent = `Você recebeu um aumento de 5%. Salário após o aumento: R$${novoSalario.toFixed(2)}`;
    } else if (vSalario >= 1000 && vSalario <= 1500) {
        novoSalario = vSalario;
        pSalario.textContent = `Você não recebeu um aumento. Salário atual: R$${novoSalario.toFixed(2)}`;
    }
}
