// 1
// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));
// 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
// return "Access denied, wrong password!";
  
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
// 3
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// 4
// const fruits = ["apple", "plum", "pear", "orange"];
// 5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0]
// console.log(firstElement);
// const secondElement = fruits[1];
// console.log(secondElement);
// const lastElement = fruits[3];
// console.log(lastElement);
// 6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);
// 7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruits.length);
// // 8
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
//  const lastElement = fruits[lastElementIndex];
//  console.log([lastElement]);
// 9
// function getExtremeElements(array) {
//     // Change code below this line
//   const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//     substring = ([firstElement, lastElement]);
//     return substring;
//     // Change code above this line
//   }
  
//   console.log(getExtremeElements([1, 2, 3, 4, 5]));
//   console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//   console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// [ 1, 5 ]
// [ 'Earth', 'Venus' ]
// [ 'apple', 'banana' ]
// 10
// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimeter);
  
//     // Change code above this line
//     return words;
//   }
//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_"));

// [ 'Mango', 'hurries', 'to', 'the', 'train' ]
// [ 'M', 'a', 'n', 'g', 'o' ]
// [ 'best', 'for', 'week' ]
// 11
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     let words;
//     words = message.split(" ");
//  messagelength = words.length;
//  totalprice = messagelength * pricePerWord;
//  return totalprice;
//     // Change code above this line
//  }
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//  console.log(calculateEngravingPrice("Web-development is creative work", 40));
//  console.log(calculateEngravingPrice("Web-development is creative work", 20));

// 50
// 100
// 160
// 80

// 12
// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line
//   string = array.join(delimeter);
//     // Change code above this line
//     return string;
//   }
//    console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
//    console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
//    console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// Mango hurries to the train
// Mango
// top_picks_for_you
// 13