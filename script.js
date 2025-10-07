// Sample products
const products = [
  { name: "Charizard EX", price: 120, image: "https://i.imgur.com/b2bVdVL.png" },
  { name: "Pikachu VMAX", price: 80, image: "https://i.imgur.com/7ZjX5lE.png" },
  { name: "Mewtwo GX", price: 100, image: "https://i.imgur.com/zJrQZP4.png" }
];

const cardsContainer = document.querySelector('.cards');
const searchInput = document.getElementById('search');
let cart = [];

// Render products
function renderProducts(productsToRender) {
  cardsContainer.innerHTML = '';
  productsToRender.forEach(p => {
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
    cardsContainer.appendChild(card);
  });
}

// Update checkout info
function updateCheckout() {
  const info = document.getElementById('checkout-info');
  if (cart.length === 0) {
    info.textContent = "No items in cart.";
  } else {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    info.textContent = `Cart: ${cart.length} items - Total: $${total}`;
  }
}

// Search products
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
});

// Initial render
renderProducts(products);

// Contact form submit
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you! Message sent.");
  e.target.reset();
});