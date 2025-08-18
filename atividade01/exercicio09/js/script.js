document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const btn = document.getElementById('btnTema');

    btn.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
});
