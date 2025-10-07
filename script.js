// 💳 Example products (replace images with your Carousell ones)
const products = [
  {
    id: "1",
    name: "Charizard EX",
    price: 29.99,
    image: "https://images.pokemontcg.io/swsh12/9_hires.png"
  },
  {
    id: "2",
    name: "Pikachu VMAX",
    price: 19.99,
    image: "https://images.pokemontcg.io/swsh11/3_hires.png"
  },
  {
    id: "3",
    name: "Mewtwo GX",
    price: 24.99,
    image: "https://images.pokemontcg.io/swsh10/9_hires.png"
  }
];

let cart = [];

// 🛒 Render shop
function renderShop(filter = "") {
  const shop = document.getElementById("shop");
  shop.innerHTML = "";

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h2>${p.name}</h2>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart('${p.id}')">Add to Cart</button>
    `;
    shop.appendChild(card);
  });
}

// ➕ Add to cart
function addToCart(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    cart.push(item);
    alert(`${item.name} added to cart!`);
  }
}

// 💳 Checkout
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    let total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    alert(`You bought ${cart.length} cards for $${total}!`);
    cart = [];
  }
});

// 🔍 Search
document.getElementById("searchBar").addEventListener("input", e => {
  renderShop(e.target.value);
});

// ⚡ Lightning
function flashLightning() {
  const lightning = document.querySelector(".lightning");
  lightning.classList.add("flash");
  setTimeout(() => lightning.classList.remove("flash"), 100);
}

setInterval(() => {
  if (Math.random() > 0.7) flashLightning();
}, 400);

// 🚀 Init
window.onload = () => renderShop();