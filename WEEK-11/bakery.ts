interface Product {
    name: string;
    price: number;
}

class Bakery {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    showProducts(): void {
        this.products.forEach(product => {
            console.log(product.name + " - ₹" + product.price);
        });
    }
}

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

let products: Product[] = [
    { name: "Chocolate Cake", price: 450 },
    { name: "Black Forest Cake", price: 500 },
    { name: "Cupcake", price: 80 }
];

let bakery = new Bakery(products);

bakery.showProducts();

console.log("Total: ₹" + calculateTotal(450, 2));