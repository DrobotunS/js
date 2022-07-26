// let orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

// 12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));
// 13
function isAdult(age) {
  const passed = age >=  18;
  return passed;
}

console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));
// 14
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === SAVED_PASSWORD;
  return isMatch;
}
console.log(isValidPassword("mangodab3st"));
console.log(isValidPassword("kiwirul3z"));
console.log(isValidPassword("jqueryismyjam"));
// 15

function checkAge(age) {
  let message;
  if (age >=  18) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
  return message;
}
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));
// 16
function checkStorage(available, ordered) {
  let message;
   if (available >=  ordered) {
    message = "Order is processed, our manager will contact you.";
  } else {
    message = "Not enough goods in stock!";
  }
  return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));
