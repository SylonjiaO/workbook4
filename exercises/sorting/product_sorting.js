let products = [
    {name: "Gummy Worms", price: 5.79},
    {name: "Plain M&Ms", price: 2.89},
    {name: "Peanut M&Ms", price: 2.89},
    {name: "Swedish Fish", price: 3.79},
    {name: "Sour Patch Kids", price: 3.79},
    {name: "Snickers", price: 3.79},
    {name: "Reese pieces", price: 3.79},
    {name: "Kit Kat", price: 4.79},
    {name: "Twix", price: 1.89},
    {name: "Cow Tails", price: 6.90},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   products.sort(function (a, b) { 
    return a.price - b.price;
   });

console.log(products);

console.log("-------------------------------------------------------------")

products.sort(function (a, b) {
    if (a.name < b.name) return -1;
    else if(a.name == b.name) return 0;
    else return 1;
});
 console.log(products);
console.log("-------------------------------------------------------------")    

products.sort(function (b, a) {
    if (a.name < b.name) return -1;
    else if(a.name == b.name) return 0;
    else return 1;
});
 console.log(products);