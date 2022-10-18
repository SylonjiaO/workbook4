"use strict";
let categories = ["drinks","entrees", "desserts"]

let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

const categoryList = document.getElementById("categoryList");
const itemList = document.getElementById("itemList");

function loadItemList() {
  //clear all list items
  itemList.options.length = 0;
  const selectedValue = categoryList.value;
  for (const item of menu[selectedValue]) {
    addOptionToList(item, item, itemList);
  }
}

function addOptionToList(text, value, list) {
  let option = new Option(text, value);
  list.appendChild(option);
}

window.onload = function () {};