interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Jordan",
    price: 5000,
    applyDiscount(discount) {
        return this.price - 1 * discount;
    },
};

console.log(shoes.applyDiscount(0.2));
