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

