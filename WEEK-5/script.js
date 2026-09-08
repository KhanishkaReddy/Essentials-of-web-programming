let cartCount = 0;
let cartTotal = 0;


// Add product to cart

function addToCart(price) {

    cartCount++;

    cartTotal = cartTotal + price;

    document.getElementById("cartCount").innerText = cartCount;

    document.getElementById("cartTotal").innerText = cartTotal;

    alert("Product added to cart!");

}


// Filter products

function filterProducts(category) {

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        if (
            category === "all" ||
            product.getAttribute("data-category") === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// Clear cart

function clearCart() {

    cartCount = 0;

    cartTotal = 0;

    document.getElementById("cartCount").innerText = cartCount;

    document.getElementById("cartTotal").innerText = cartTotal;

    alert("Cart cleared!");

}
