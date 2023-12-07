"use strict";

let products = [
  { id: 11, name: "Laptop", quantity: 3 },
  { id: 22, name: "Smartphone", quantity: 5 },
  { id: 33, name: "Headphones", quantity: 3 },
  { id: 44, name: "Tablet", quantity: 1 },
  { id: 55, name: "Smartwatch", quantity: 2 },
];

const getProductNames = () => {
  
   let productsNames= products.map((product)=>product.name)
    return productsNames

    
};


const getProductByName = (productName) => {

 let product=products.find(product=>product.name===productName)
  return product
};


const getProductsBelowQuantity = (quantity) => {

  let productsWithSpecificIndex=products.filter((product,index) =>{
   if(index<=quantity) {
    return product
}
  })
 return productsWithSpecificIndex
};

const updateProductQuantity = (id, newQuantity) => {
  const product=products.find((product)=>product.id===id)
   if(product) {
    product.quantity=newQuantity
    }
  console.log(products)
 };

// ----- RESULTS -----

console.log(getProductNames());
// OUTPUT: ["Laptop", "Smartphone", "Headphones", "Tablet", "Smartwatch"]

console.log(getProductByName("Tablet")); // OUTPUT: { id: 44, name: "Tablet", quantity: 1 }


console.log(getProductsBelowQuantity(2));
// // // OUTPUT: [{ id: 11, ... }, { id: 22, ... }, { id: 33, ... }]


updateProductQuantity(11,10); // [{ id: 11, name: "Laptop", quantity: 10 }, ...]



