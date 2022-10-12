let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];


let cheapCandy = [];

    for (let i = 0; i < products.length; i++) {
        const candy = products[i];
if (candy.price <= 4.99) {
    cheapCandy.push(candy);
    } 
}

console.log(cheapCandy);

for (let i = 0; i < cheapCandy.length; i++) {
    const candy = cheapCandy[i];
    console.log(candy.product);
}

for (let i = 0; i < cheapCandy.length; i++) {
    const candy = cheapCandy[i];
    if (candy.product == "Swedish Fish"){
        console.log(candy.product);
    }
}



for (let i = 0; i < cheapCandy.length; i++) {
    const candy = cheapCandy[i];
    if (candy.product == products.splice(M&Ms)) {
        console.log(candy.product);
    }
}