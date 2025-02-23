const products = document.querySelectorAll('.product');
const cart = document.getElementById('cart');
const totalDisplay = document.getElementById('total');
const orderForm = document.getElementById('order-form');

let cartItems = [];

products.forEach(product => {
  product.querySelector('.add-to-cart').addEventListener('click', () => {
    const name = product.dataset.name;
    const price = parseInt(product.dataset.price);
    const image = product.dataset.image;
    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ name, price, quantity: 1, image });
    }

    updateCart();
  });
});

function updateCart() {
  cart.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <span>${item.name} (${item.quantity} x  ${item.price}K)</span>
      <span>${itemTotal}K</span>
      <div>
        <button class="decrease" data-name="${item.name}">-</button>
        <button class="increase" data-name="${item.name}">+</button>
      </div>
    `;

    cart.appendChild(cartItem);
  });

  totalDisplay.textContent = total;

  // Event listeners for quantity adjustments
  document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
      const itemName = button.dataset.name;
      const item = cartItems.find(item => item.name === itemName);
      item.quantity++;
      updateCart();
    });
  });

  document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
      const itemName = button.dataset.name;
      const item = cartItems.find(item => item.name === itemName);
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cartItems = cartItems.filter(i => i.name !== itemName);
      }
      updateCart();
    });
  });
}

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const orderDetails = cartItems.map(item => `${item.name}%20${item.quantity}%20x%20${item.price}K%0a`).join('📌'); 
  const total = totalDisplay.textContent;

  const message = `https://api.whatsapp.com/send?phone=${phone}&text=𝘏𝘪%20𝘬𝘢𝘬,%20𝘗𝘦𝘴𝘢𝘯𝘢𝘯%20𝘬𝘢𝘮𝘶%20𝘴𝘶𝘥𝘢𝘩%20𝘬𝘢𝘮𝘪%20𝘵𝘦𝘳𝘪𝘮𝘢%20𝘥𝘢𝘯%20𝘢𝘬𝘢𝘯%20𝘴𝘦𝘨𝘦𝘳𝘢%20𝘥𝘪%20𝘱𝘳𝘰𝘴𝘦𝘴%20𝘴𝘦𝘵𝘦𝘭𝘢𝘩%20𝘬𝘢𝘮𝘪%20𝘮𝘦𝘯𝘦𝘳𝘪𝘮𝘢%20𝘣𝘶𝘬𝘵𝘪%20𝘱𝘦𝘮𝘣𝘢𝘺𝘢𝘳𝘢𝘯.%20𝘛𝘌𝘙𝘐𝘔𝘈𝘒𝘈SIH%0a──────────────────────────────%0a%0aNama:%20${name}%0aAlamat:%20${address}%0aNomor%20HP:%20${phone}%0a%0aDetail%20Pesanan%0a📌${orderDetails}%0a──────────────────────────────%0aTotal:%20${total}K%0a%0a%0a──────────────────────────────%0aMetode%20Pembayaran%0aDANA:08xx%0aBCA:XXX`;

  const telegramBotToken = '7863353249:AAGeLK7vgDRaqXrdL6dLLSmogSyySPjda7k';
  const telegramChatId = '-4634384561';
  const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;

  fetch(telegramApiUrl); 

  alert('Pesanan terkirim! kamu akan segera menerima pesan WHATSAPP dari admin store kami, pesanan akan di pending jika memesan di luar jam oprasional kami');
  cartItems = [];
  updateCart();
  orderForm.reset();
});
