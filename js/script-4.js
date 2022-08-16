// 1
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza("Your pizza is being prepared, please wait.");
//   const pointer = makePizza;
//   console.log(result);
//   console.log(pointer);

//   Your pizza is being prepared, please wait.
//   [Function: makePizza]

// 2
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }
//   console.log(makeMessage("Royal Grand", makePizza));
//   console.log(makeMessage("Ultracheese", deliverPizza));

// Pizza Royal Grand is being prepared, please wait...
// Delivering Ultracheese pizza.
  
// 3
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
//   });

// Pizza Royal Grand is being prepared, please wait...
// Delivering pizza Royal Grand.
// Pizza Ultracheese is being prepared, please wait...
// Eating pizza Ultracheese.

// 4
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {
//         if (this.pizzas.includes(pizzaName)) {
//           return makePizza(pizzaName);
//         }
//         return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//     }
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     'There is no pizza with a name Vienna in the assortment.'
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// Your order is accepted. Cooking pizza Smoked.
// Your order is accepted. Cooking pizza Four meats.
// Error! There is no pizza with a name Big Mike in the assortment.
// Error! There is no pizza with a name Vienna in the assortment.

// 5
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (namber) {
//       totalPrice += (namber)
//     });
//       return totalPrice;
//     };
  
  
  
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 138
// 503
// 1116

// 6
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
//   //   orderedItems.forEach(function (namber) {
//   //     totalPrice += (namber)
//   //   });
//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));

// [ 4, 5 ]
// [ 5 ]
// []
// [ 41, 76 ]
// [ 24, 41, 76 ]

// 7
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
  
//     firstArray.forEach(function (array) {
//       if (secondArray.includes(array)) {
//         commonElements.push(array);
//       }
//     })
  
//     return commonElements;
//     // Change code above this line
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// [ 2 ]
// [ 1, 2 ]
// [ 12, 27, 3 ]
// [ 10, 30, 40 ]
// []

// 8
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   }
//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));
//   500
//   480
//   1200  

// 9
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

// // Change code above this line
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// 500
// 480
// 1200

// 10
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => {
//      return totalPrice += item;
//     });
  
//     return totalPrice;
//   }
  
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 138
// 503
// 1116

// 11
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }
//     console.log(filterArray([1, 2, 3, 4, 5], 3));
//     console.log(filterArray([1, 2, 3, 4, 5], 4));
//     console.log(filterArray([1, 2, 3, 4, 5], 5));
//     console.log(filterArray([12, 24, 8, 41, 76], 38));
//     console.log(filterArray([12, 24, 8, 41, 76], 20));

// [ 4, 5 ]
// [ 5 ]
// []
// [ 41, 76 ]
// [ 24, 41, 76 ]

// 12
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach( (element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Change code above this line
//     return commonElements;
//   }
//       console.log(getCommonElements([1, 2, 3], [2, 4]));
//       console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//       console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//       console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//       console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// [ 2 ]
// [ 1, 2 ]
// [ 12, 27, 3 ]
// [ 12, 27, 3 ]
// []

// 13
// function changeEven(numbers, value) {
//  const newArray = [];
//     numbers.forEach((number) => {
//       if (number % 2 === 0) {
//         newArray.push(number = number + value);
//       } if (number % 2 !== 0) {
//       newArray.push(number);}
//     });
//     return newArray;
//   }
// const numbers = [1, 2, 3, 4, 5];
// console.log(changeEven(numbers, 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// [ 1, 12, 3, 14, 5 ]
// [ 12, 18, 3, 7, 14, 16 ]
// [ 17, 124, 168, 31, 142 ]
// [ 144, 13, 81, 192, 136, 154 ]

// 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// [ 5, 4, 5, 7 ]

// 15
