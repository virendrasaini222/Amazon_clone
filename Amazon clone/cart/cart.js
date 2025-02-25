const cartData = [
    {
        id: 1,
        name: "Apple iPhone 13",
        price: 799,
        image: "https://via.placeholder.com/50x50?text=iPhone13",
        quantity: 1


    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 699,
        image: "https://via.placeholder.com/50x50?text=GalaxyS21",
        quantity: 1
    },
    {
        id: 3,
        name: "Sony Headphones",
        price: 199,
        image: "https://via.placeholder.com/50x50?text=Headphones",
        quantity: 1
    }
];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    let totalPrice = 0;

    cartData.forEach(item => {
        // Create each cart item row
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);

        // Calculate the total price
        totalPrice += item.price * item.quantity;
    });

    // Update total price
    totalPriceElem.textContent = totalPrice.toFixed(2);
}

function removeItem(id) {
    const index = cartData.findIndex(item => item.id === id);
    if (index !== -1) {
        cartData.splice(index, 1);
        updateCart(); // Update the cart view after removal
    }
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert("Proceeding to checkout!");
});

updateCart(); // Initial call to display cart
