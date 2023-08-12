/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [
  {
    name: "Cherry",
    price: 5,
    quantity: 3,
    productId: 122,
    image: src="images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 7,
    quantity: 5,
    productId: 133,
    image: src="images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 4,
    quantity: 7,
    productId: 144,
    image: src="images/strawberry.jpg",
  },
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
src ='images/cherry.jpg';
src ='images/orange.jpg';
src ='images/strawberry.jpg';
/* Declare an empty array named cart to hold the items in the cart */
const cart =[]
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function findProductById(productId) {
  return products.find(item => item.productId === productId);
}

function addProductToCart(productId) {
  const product = findProductById(productId);
  const cartItem = cart.find(item => item.productId === productId);
  if (!cartItem) {
    cart.push({
      ...product,
      quantity: 1
    });
  } else {
    // If the product is already in the cart, increase the quantity
    cartItem.quantity++;
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity (productId) {
 // Find the item in the cart that matches the given productId
 const cartItem = cart.find(function(item) {
  return item.productId === productId;
});

// If a matching item is found, increase its quantity by 1
if (cartItem) {
  cartItem.quantity++;
 }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
 function decreaseQuantity (productId) {
  const cartItem = cart.find(function(item) {
    return item.productId === productId;
  });

  // If a matching item is found
  if (cartItem) {
    // Decrease the quantity by 1
    cartItem.quantity--;

    // If the quantity reaches zero, remove the item from the cart
    if (cartItem.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
 // Find the index of the product in the cart array
 const index = cart.findIndex(function(item) {
  return item.productId === productId;
});

// If the product is found, remove it from the cart
if (index !== -1) {
  cart.splice(index, 1);
}
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
  return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.length = 0;
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;
function pay(payment){
  totalPaid += payment;
  const total = cartTotal();
  const remainingBalance = total - totalPaid;
  
if (remainingBalance > 0){
    return remainingBalance;
  } else if (remainingBalance === 0){
    return 0;
  } else {
    return -remainingBalance;
  }
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
function convertCurrency(currency, currencySystem) {
  if (currencySystem === 'JPY' || currencySystem === 'jpy') {
    return convertJPYtoUSD(currency);
  } 
  else if (currencySystem  === 'Eur' || currencySystem  === 'eur') {
    return convertEurtoUSD(currency);
  }  
  else if (currencySystem  === 'GBP'|| currencySystem  === 'gbp') {
    return convertGBPtoUSD(currency);
  }
  else if ( currencySystem  === 'BRL'|| currencySystem  === 'brl') {
    return convertBRLtoUSD(currency);
  }
}
/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}