let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Reese's Pieces", price: 6.23 },
  ];
  
  console.log("Candies less than $4.00 using for of loop");
  for (const product of products) {
    if (product.price < 4.0) {
      console.log(product);
    }
  }
  console.log("------------------");
  
  console.log("Candies less than $4.00 using forEach function on array");
  products.forEach(function (product) {
    if (product.price < 4.0) {
      console.log(product);
    }
  });
  console.log("------------------");
  
  console.log("Candies less than $4.00");
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
  
    if (product.price < 4.0) {
      console.log(product);
    }
  }
  console.log("------------------");
  
  console.log("M&M Candies");
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
  
    //product.product is the name of the product
    if (product.product.indexOf("M&Ms") !== -1) {
      console.log(product);
    }
  }
  console.log("------------------");
  
  console.log("Do we carry Swedish Fish?");
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
  
    //product.product is the name of the product
    if (product.product.indexOf("Swedish Fish") !== -1) {
      console.log("We do carry", product.product);
      return;
    }
  }
  console.log("------------------");