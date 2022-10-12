let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];


    function calculateSubtotal(lunch) {

        let subtotal = 0
        for (let i = 0; i < lunch.length; i++) {
    
        const item = lunch[i];
        subtotal += item.price;
    }
      return subtotal;  
    }
   
    let subtotal = calculateSubtotal(lunch);
    console.log(subtotal);