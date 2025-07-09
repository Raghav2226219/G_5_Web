const container = document.getElementById('product-container');

fetch('https://dummyjson.com/products').then(res => res.json())
.then(data => {
    const products = data.products;

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <div class="card-content">
          <div class="card-title">${product.title}</div>
          <div class="card-description">${product.description}</div>
          <div class="card-price">$${product.price}</div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    container.innerHTML = `<p>Failed to load products. Try again later.</p>`;
    console.error("Error fetching products:", err);
  });
