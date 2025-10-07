// Product data
const products = [
  { name: "Charizard EX", price: 120, image: "charizard.jpeg" },
  { name: "Pikachu VMAX", price: 80, image: "pikachu.jpeg" },
  { name: "Mewtwo GX", price: 100, image: "mewtwo.jpeg" }
];

const productGrid = document.querySelector('.product-grid');
const searchBar = document.getElementById('searchBar');
const checkoutBtn = document.getElementById('checkoutBtn');

let cart = [];

// Render products dynamically (so search works)
function renderProducts(items) {
  productGrid.innerHTML = '';
  items.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button>Add to Cart</button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      cart.push(p);
      updateCheckout();
    });
    productGrid.appendChild(card);
  });
}

// Search functionality
searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
});

// Checkout button
function updateCheckout() {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Cart: ${cart.length} item(s)\nTotal: $${total}`);
}

checkoutBtn.addEventListener('click', updateCheckout);

// Initial render
renderProducts(products);