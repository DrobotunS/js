// let orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

// 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));
// // 13
// function isAdult(age) {
//   const passed = age >=  18;
//   return passed;
// }

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));
// // 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));
// // 15

// function checkAge(age) {
//   let message;
//   if (age >=  18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));
// // 16
// function checkStorage(available, ordered) {
//   let message;
//    if (available >=  ordered) {
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));
// //18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity
// if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   return message;
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));
// // 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === "jqueryismyjam") {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
// // 20
// function checkStorage(available, ordered) {
//   let message;
// if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// // 21
// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <= end);
//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));
// 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType === "pro" || subType === "vip") ;
//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));
// 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));
// 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
// if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (50000 > totalSpent && totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (20000 > totalSpent && totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {discount = BASE_DISCOUNT;
//   }
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));
// 25
// function checkStorage(available, ordered) {
//   let message;
//   message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));
// 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// message = (password === "jqueryismyjam") ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));
// 27
// function getSubscriptionPrice(type) {
//   let price;
//  switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// switch (password) {
//   case null:
//   message = "Canceled by user!";
//   break;

//   case ADMIN_PASSWORD:
//   message = "Welcome!";
//   break;
  
//   default: message = "Access denied, wrong password!";
// }
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
// 29
// function getShippingCost(country) {
//   let message;
//   switch (country) {
//   case "China":
//   message = "Shipping to China will cost 100 credits";
//   break;

//   case "Chile":
//   message = "Shipping to Chile will cost 250 credits";
//   break;

//   case "Australia":
//   message = "Shipping to Australia will cost 170 credits";
//   break;

//   case "Jamaica":
//   message = "Shipping to Jamaica will cost 120 credits";
//   break;
  
//   default: message = "Sorry, there is no delivery to your country";
// }
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));
// 30
// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`;
//     return message;
//   }
//   console.log(getNameLength("Poly"));
//   console.log(getNameLength("Harambe"));
//   console.log(getNameLength("Billy"));
//   console.log(getNameLength("Joe"));
// 31
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;

// console.log(courseTopic.length);
// console.log(firstElement[0]);
// console.log(lastElement[courseTopic.length - 1]);;
// 32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }
//     console.log(getSubstring("Hello world", 3));
//     console.log(getSubstring("Hello world", 6));
//     console.log(getSubstring("Hello world", 8));
//     console.log(getSubstring("Hello world", 11));
//     console.log(getSubstring("Hello world", 0));
// Hel
// Hello 
// Hello wo
// Hello world
// 33

  
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (maxLength < message.length) {
//     result = message.slice(0, maxLength) + "...";
//  } else {result = message;
//   }
//     return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
// 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));
// 35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));
// 36
// function checkForSpam(message) {
//   let result;
//   result =message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));