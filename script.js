// This function adds an item to the shopping cart
function addToCart(itemId, quantity) {
   
    var item = document.querySelector(`[data-item-id="${itemId}"]`);
    if (!item) {
      console.error(`Item with ID ${itemId} not found in shop`);
      return;
    }
  
 
    var name = item.querySelector('h3').textContent;
    var price = item.querySelector('p').textContent;
  
   
    var cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <h3>${name}</h3>
      <p>${price}</p>
      <input type="number" value="${quantity}" min="1">
      <button class="remove">Remove</button>
    `;
  
   
    var cart = document.getElementById('cart-items');
    cart.appendChild(cartItem);
  }
  
  // Add event listeners to the "Add to cart" buttons
  var addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      
      var itemId = this.parentElement.getAttribute('data-item-id');
      var quantityInput = this.parentElement.querySelector('input');
      var quantity = quantityInput ? quantityInput.value : 1;
      addToCart(itemId, quantity);
    });
  });
  
  // Add event listeners to the "Remove" buttons
  document.addEventListener('click', function(event) {
    if (event.target.className === 'remove') {
    
      event.target.parentElement.remove();
    }
  });
  
  // Add an event listener to the "Calculate" button
  var calculateButton = document.getElementById('calculate-total');
  calculateButton.addEventListener('click', function() {
    // Get all the prices and quantities from the cart items
    var priceElements = document.querySelectorAll('#cart-items p');
    var quantityInputs = document.querySelectorAll('#cart-items input');
  

    var total = 0;
    for (var i = 0; i < priceElements.length; i++) {
      var price = Number(priceElements[i].textContent.replace('$', ''));
      var quantity = quantityInputs[i].value;
      total += price * quantity;
    }
  
    // Display the total
    var totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${total}`;
  });


  const heartButton = document.getElementById("heart-button");

heartButton.addEventListener("click", function() {
  heartButton.classList.toggle("liked");
});

const heartButton1 = document.getElementById("heart-button1");

heartButton1.addEventListener("click", function() {
  heartButton1.classList.toggle("liked1");
});

const heartButton2 = document.getElementById("heart-button2");

heartButton2.addEventListener("click", function() {
  heartButton2.classList.toggle("liked2");
});


  