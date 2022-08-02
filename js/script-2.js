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
// function slugify(title) {
//     // Change code below this line
//   wordLowerCase = title.toLowerCase();
//   word = wordLowerCase.split(" ");
//   words = word.join("-");
//   return words;
//     // Change code above this line
//   }
//    console.log(slugify("Arrays for begginers"));
//    console.log(slugify("English for developer"));
//    console.log(slugify("Ten secrets of JavaScript"));
//    console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// arrays-for-begginers
// english-for-developer
// ten-secrets-of-javascript
// how-to-become-a-junior-developer-in-two-weeks
// 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);;
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(2, );;
// console.log(lastThreeEls);

// [ 'apple', 'plum' ]
// [ 'plum', 'pear', 'orange' ]
// [ 'pear', 'orange', 'banana' ]
// 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// [ 'Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston' ]

// 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let totalArray;
//     let array;
//     totalArray = firstArray.concat(secondArray);
//     array = totalArray.slice(0, maxLength);
//     return array;
//     // Change code above this line
//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// [ 'Mango', 'Poly', 'Ajax' ]
// [ 'Mango', 'Poly', 'Houston', 'Ajax' ]
// [ 'Mango', 'Ajax', 'Chelsea' ]
// [ 'Earth', 'Jupiter' ]
// [ 'Earth', 'Jupiter', 'Neptune', 'Uranus' ]
// []

// 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 3
// 4
// 5
// 6
// 7

// 18
