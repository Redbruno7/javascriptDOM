document.addEventListener('DOMContentLoaded', () => {
    const tarefaInput = document.getElementById('tarefa');
    const lista = document.getElementById('lista');

    document.getElementById('btnAdicionar').addEventListener('click', () => {
        const texto = tarefaInput.value.trim();

        if (texto === '') {
            alert('Digite uma tarefa!');
            return;
        }

        const li = document.createElement('li');

        li.textContent = texto;

        lista.appendChild(li);

        tarefaInput.value = '';
        
        tarefaInput.focus();
    });
});
