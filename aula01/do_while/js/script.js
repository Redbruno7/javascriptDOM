// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    const ul = document.getElementById('saida');

    const limpar = () => ul.innerHTML = " ";

    const addItem = texto => {
        const li = document.createElement('li');

        li.textContent = texto;
        
        ul.appendChild(li);
    };

    document.getElementById('btnWhile').addEventListener('click', function () {
        limpar();

        let i = 1;

        while (i <= 3) {
            addItem('while: ' + 1);
            i++;
        }
    });

    document.getElementById('btnDoWhile').addEventListener('click', function () {
        limpar();

        const senhaCorreta = '123'

        let tentativa;
        let tentativas = 0;

        do {
            tentativa = prompt('Digite a senha (tente 123): ');
            tentativas++;
        } while (tentativa != senhaCorreta);

        addItem(`Senha correta após ${tentativas} tentativa(s)!`)
    });

    document.getElementById('btnFor').addEventListener("click", function () {
        limpar();
        
        for (let i = 1; i <= 5; i++) {
            addItem('for: ' + i);
        }
    })
})