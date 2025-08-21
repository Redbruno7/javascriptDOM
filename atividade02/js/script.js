const produtos = [
    { nome: "Sabonete Natural", preco: 15.0, categoria: "cosmetico" },
    { nome: "Shampoo Orgânico", preco: 25.0, categoria: "cosmetico" },
    { nome: "Granola Artesanal", preco: 18.5, categoria: "alimento" },
    { nome: "Mel Puro", preco: 22.0, categoria: "alimento" }
];

// Seletores
const selectCategoria = document.getElementById("categoria");
const divProdutos = document.getElementById("produtos");
const divTotal = document.getElementById("total");

// Função para renderizar
function renderizarProdutos(lista) {
    divProdutos.innerHTML = "";

    lista.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("produto");
        card.innerHTML = `
            <h3>${prod.nome}</h3>
            <p>R$ ${prod.preco.toFixed(2)}</p>
        `;

        divProdutos.appendChild(card);
    });

    // Usando reduce para calcular o total
    const total = lista.reduce((acc, item) => acc + item.preco, 0);
    divTotal.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// Função para aplicar filtro
function aplicarFiltro() {
    const categoria = selectCategoria.value;

    const filtrados = categoria === "todos"
        ? produtos
        : produtos.filter(p => p.categoria === categoria);

        renderizarProdutos(filtrados);
}

// Evento de mudança no select
selectCategoria.addEventListener("change", aplicarFiltro);

// Inicial
aplicarFiltro();