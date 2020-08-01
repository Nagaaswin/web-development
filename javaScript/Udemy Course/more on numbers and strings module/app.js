function randomInBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInBetween(10, 15));

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCatgeory = 'cheap';
  if (productPrice > 20) {
    priceCatgeory = 'fair';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCatgeory}.`;
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`;

console.log(productOutput);
