"use strict";

function generatePartCode(partInformation) {
    return `${partInformation.supplierCode}:${partInformation.productNumber}-${partInformation.size}`;
  }

function parsePartCode(partCode) {
    // partCode Format
    //supplierCode:productNumber-size
    let colPos = partCode.indexOf(":");
    let dashPos = partCode.indexOf("-"); 
    
    //find 
    let supplierCode = partCode.substring(0, colPos);
    let productNumber = partCode.substring(colPos + 1,dashPos);
    let size = partCode.substring(dashPos + 1)

    let partInfo = {
     supplierCode: supplierCode,
     productNumber: productNumber,
     size: size,
    }
   
    
   
    return partInfo;
}

let partCode1 = "XYZ:1234-L";
let partCodeFunction = parsePartCode(partCode1);
console.log(partCodeFunction);
console.log(generatePartCode(partCodeFunction));


/*let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
 " Product Number: " + part1.productNumber +
 " Size: " + part1.size);*/