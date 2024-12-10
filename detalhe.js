// Simulação de produtos
const products = [
    { id: 1, title: 'Produto 1', price: 29.99, description: 'Descrição do Produto 1', image: 'https://via.placeholder.com/250' },
    { id: 2, title: 'Produto 2', price: 49.99, description: 'Descrição do Produto 2', image: 'https://via.placeholder.com/250' },
    { id: 3, title: 'Produto 3', price: 89.99, description: 'Descrição do Produto 3', image: 'https://via.placeholder.com/250' }
];

// Listar os produtos na página index.html
function listProducts() {
    const productList = document.getElementById('productList');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('produto');
        
        productDiv.innerHTML = `
            <a href="produto.html?id=${product.id}">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>R$ ${product.price.toFixed(2)}</p>
            </a>
        `;
        
        productList.appendChild(productDiv);
    });
}

// Exibir os detalhes do produto na página produto.html
function showProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const productDetails = document.getElementById('productDetails');
        productDetails.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p><strong>Preço:</strong> R$ ${product.price.toFixed(2)}</p>
            <p><strong>Descrição:</strong> ${product.description}</p>
            <button onclick="window.history.back()">Voltar</button>
        `;
    }
}

// Se estamos na página de listagem, chamamos a função listProducts
if (window.location.pathname.includes('index.html')) {
    listProducts();
}

// Se estamos na página de detalhes, chamamos a função showProductDetails
if (window.location.pathname.includes('produto.html')) {
    showProductDetails();
}
