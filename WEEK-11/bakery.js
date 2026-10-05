"use strict";
class Bakery {
    products;
    constructor(products) {
        this.products = products;
    }
    showProducts() {
        this.products.forEach(product => {
            console.log(product.name + " - ₹" + product.price);
        });
    }
}
function calculateTotal(price, quantity) {
    return price * quantity;
}
let products = [
    { name: "Chocolate Cake", price: 450 },
    { name: "Black Forest Cake", price: 500 },
    { name: "Cupcake", price: 80 }
];
let bakery = new Bakery(products);
bakery.showProducts();
console.log("Total: ₹" + calculateTotal(450, 2));
