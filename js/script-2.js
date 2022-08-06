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

// function calculateTotal(number) {
//  // Change code below this line
// let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
    
//     return total;
//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// 1
// 6
// 28
// 171
// 300
//  19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// apple
// plum
// pear
// orange
// 20
// Как найти сумму элементов массива
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
// total += order[i];}
    
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// 138
// 503
// 1116
// 21
// ПОИСК САМОГО ДЛИННОГО СЛОВА
// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(" ");
//   let maxlength = words[0];
//     for (let i = 0; i < words.length; i += 1) {
//         if (words[i].length > maxlength.length) {
//             maxlength = words[i];
//         }
//     }
            
//     return maxlength;
    

//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// jumped
// Google
// force
// 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
  
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// [ 1, 2, 3 ]
// [ 14, 15, 16, 17 ]
// [29, 30, 31, 32, 33, 34]

// 23
// function filterArray(numbers, value) {
//    // Change code below this line
// const number = [];
//   for ( let i = 0; i < numbers[i]; i += 1){
//     if (numbers[i] > value) {
//       number.push(numbers[i]);
//     }
      
//   }
//   return number;

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// [ 4, 5 ]
// [ 5 ]
// []
// [ 41, 76 ]
// [24, 41, 76]

// 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// true
// false
// true
// false
// true

// 25
// function getCommonElements(array1, array2) {
//   // Change code below this line
// const element = [];
//   for (let array of array1) {
//     if (array1.includes(array) && array2.includes(array)) {
//       element.push(array)
//     }

//   }
//   return element;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
//  26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let orders of order) {
//     total += orders;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// 138
// 503
// 1116
// 0

// 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let element of numbers) {
//     const number = element;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// [ 4, 5 ]
// [ 5 ]
// []
// [ 41, 76 ]
// [ 24, 41, 76 ]

// 28
console.log(5 % 2);
// 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1;
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2;
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1;
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0;
// //  5, разделенное на 5, равно 1, а остаток - 0) 5 % 1 = 0;
// // 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1;
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2;
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1;
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0;
// //  5, разделенное на 5, равно 1, а остаток - 0
