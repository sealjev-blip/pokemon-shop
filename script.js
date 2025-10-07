const checkoutBtn = document.getElementById('checkoutBtn');
const searchBar = document.getElementById('searchBar');
const cards = Array.from(document.querySelectorAll('.card'));

let cart = [];

// Add to Cart buttons
cards.forEach(card => {
  const btn = card.querySelector('button');
  btn.addEventListener('click', () => {
    const name = card.querySelector('h3').innerText;
    const price = parseFloat(card.querySelector('p').innerText.replace('$',''));
    cart.push({name, price});
    alert(`Added ${name} to cart`);
  });
});

// Checkout button
checkoutBtn.addEventListener('click', () => {
  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }
  const total = cart.reduce((sum,item)=>sum+item.price,0);
  alert(`Cart: ${cart.length} item(s)\nTotal: $${total}`);
});

// Search functionality
searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  cards




