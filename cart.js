const cartItemsDiv = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty 🛒</p>";
    totalSpan.innerText = "0";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>₹${item.price} × ${item.qty}</p>
        </div>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  totalSpan.innerText = total;
  document.getElementById("cart-count").innerText =
    cart.reduce((sum, i) => sum + i.qty, 0);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

checkoutBtn.onclick = () => {
  alert("Order placed successfully 🎉");
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
};

renderCart();


