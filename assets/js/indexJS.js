$(document).ready(function() {
    // Carregar os produtos da API
    $.getJSON("https://fakestoreapi.com/products", function(products) {
        const productList = $('#productList'); // Contêiner onde os produtos serão listados

        // Pegar os dois primeiros produtos (ou o número desejado de produtos)
        const firstTwoProducts = products.slice(0, 38);

        firstTwoProducts.forEach(product => {
            // Formatar o preço antigo e o preço novo
            const formattedPrice = (product.price).toFixed(2);
            const discountPercentage = 14; // Desconto fictício de 14%
            const discountPrice = (product.price * (1 - discountPercentage / 100)).toFixed(2);

            // Adicionar o produto à lista com um link em torno da div inteira
            productList.append(`
                <a href="produto.html?id=${product.id}" class="produto-link">
                    <div class="produto">
                        <img src="${product.image}" alt="${product.title}">
                        <p class="descricao">${product.title}</p>
                        <p class="precoAntigo">R$ ${formattedPrice}</p>
                        <div class="precos">
                            <p class="precoNovo">R$ ${discountPrice}</p>
                            <p class="desconto">${discountPercentage}% OFF</p>
                        </div>
                        <p class="juros">em 10x R$ ${(discountPrice / 10).toFixed(2)} sem juros</p>
                        <p class="frete"><span>Frete Gratis</span> por ser sua primeira compra</p>
                    </div>
                </a>
            `);
        });
    });
});
