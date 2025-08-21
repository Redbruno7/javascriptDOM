const produtos = [
    { nome: "Sabonete Natural", preco: 15.0, categoria: "cosmetico" },
    { nome: "Shampoo Orgânico", preco: 25.0, categoria: "cosmetico" },
    { nome: "Granola Artesanal", preco: 18.5, categoria: "alimento" },
    { nome: "Mel Puro", preco: 22.0, categoria: "alimento" }
];

// --- Seletores do DOM ---
// Pega elementos do HTML pelo ID
const selectCategoria = document.getElementById("categoria");   // filtro
const divProdutos = document.getElementById("produtos");        // local dos produtos
const divTotal = document.getElementById("total");              // soma valor total

// --- Renderizando os produtos ---
function renderizarProdutos(lista) {
    // Limpa a lista antes de renderizar
    divProdutos.innerHTML = "";

    // Cria "card" visual para cada produto
    lista.forEach(prod => {
        const card = document.createElement("article"); // cria um article
        card.classList.add("produto");                  // adiciona classe CSS "produto"
        
        // Insere o conteúdo ao card - nome e preço
        card.innerHTML = `
            <h3>${prod.nome}</h3>
            <p>R$ ${prod.preco.toFixed(2)}</p>
        `;

        // Adiciona card na seção produtos
        divProdutos.appendChild(card);
    });

    // --- Calculando o total com reduce() ---
    // Soma todos os preços dos produtos da lista atual
    const total = lista.reduce((acc, item) => acc + item.preco, 0);

    // Mostra o total com 2 casas decimais
    divTotal.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// --- Aplicando o filtro de categoria ---
function aplicarFiltro() {
    // Pega o valor selecionado
    const categoria = selectCategoria.value;

    // Se for "todos", mostra todos os produtos
    // Caso contrário, filtra apenas os da categoria escolhida
    const filtrados = categoria === "todos"
        ? produtos
        : produtos.filter(p => p.categoria === categoria);

    // Renderiza os produtos filtrados
    renderizarProdutos(filtrados);
}

// --- Evento de mudança no select ---
// Ao mudar a categoria, chama aplicarFiltro()
selectCategoria.addEventListener("change", aplicarFiltro);

// --- Inicializando ---
aplicarFiltro();