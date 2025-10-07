// Get elements
const checkoutBtn = document.getElementById('checkoutBtn');
const searchBar = document.getElementById('searchBar');
const productGrid = document.querySelector('.product-grid');
const allCards = Array.from(productGrid.querySelectorAll('.card'));

let cart = [];

// Add to Cart buttons
allCards.forEach(card => {
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
  let items = cart.map(i => i.name).join(', ');
  alert(`Cart Items: ${items}\nTotal: $${total}`);
});

// Search functionality
searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  allCards.forEach(card => {
    const name = card.querySelector('h3').innerText.toLowerCase();
    if(name.includes(query)){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});