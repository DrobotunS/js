// 1
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

// 2
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     }
//   };
  
// 3
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment.rating;
//   console.log(aptRating);
//   const aptDescr = apartment.descr;
//   console.log(aptDescr);
//   const aptPrice = apartment.price;
//   console.log(aptPrice);
//   const aptTags = apartment.tags;
//   console.log(aptTags);
  
//   4
// Spacious apartment in the city center
// 2153
// [ 'premium', 'promoted', 'top' ]
  
// 4
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   const ownerName = apartment.owner.name;
//   console.log(ownerName);
//   const ownerPhone = apartment.owner.phone;
//   console.log(ownerPhone);
//   const ownerEmail = apartment.owner.email;
//   console.log(ownerEmail);
//   const numberOfTags = apartment.tags.length;
//   console.log(numberOfTags);
//   const firstTag = apartment.tags[0];
//   console.log(firstTag);
//   const lastElementIndex = apartment.tags.length - 1;
//   const lastTag = apartment.tags[lastElementIndex];
//   console.log(lastTag);
  

//   Henry
//   982-126-1588
//   henry.carter@aptmail.com
// 3
// premium
// top

// 5
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//     const aptRating = apartment["rating"];
//     console.log(aptRating);
//     const aptDescr = apartment["descr"];
//     console.log(aptDescr);
//     const aptPrice = apartment["price"];
//     console.log(aptPrice);
//     const aptTags = apartment["tags"];
//     console.log(aptTags);

//     4
// Spacious apartment in the city center
// 2153
// [ 'premium', 'promoted', 'top' ]

// 6
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  

//   apartment.price = 5000;
//   console.log(apartment.price);
//   apartment.rating = 4.7;
//   console.log(apartment.rating);
//   apartment.owner.name = "Henry Sibola";
//   console.log(apartment.owner.name);
//   apartment.tags = ["premium", "promoted", "top", "trusted"];
//   console.log(apartment.tags);
  
// //   4.7
// // Henry Sibola
// // [ 'premium', 'promoted', 'top', 'trusted' ]

// 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";


// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);

// 60
// 3
// Ямайка
// Кингстон

// 8

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);

// Ремонт дроидов
// 2500
// https://via.placeholder.com/640x480
// [ 'в продаже', 'в тренде', 'лучшая покупка']

// 9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   emailInputName,
//   passwordInputName,
// };
// credentials[emailInputName] = "henry.carter@aptmail.com";
// credentials[passwordInputName] ="jqueryismyjam";
// console.log(credentials.email);
// console.log(credentials.password);

// henry.carter@aptmail.com
// jqueryismyjam

// 10
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (const key in apartment) {
//     // Ключ
//    keys.push(key);
//   values.push(apartment[key]);
//     // Значение свойства с таким ключом
//     // console.log(apartment[key]);
//   }
//   console.log(keys);
//   console.log(values);

//   [ 'descr', 'rating', 'price' ]
// [ 'Spacious apartment in the city center', 4, 2153 ]

// 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }
// }
// console.log(keys);
// console.log(values);

// [ 'descr', 'rating', 'price' ]
// [ 'Spacious apartment in the city center', 4, 2153 ]

// 12
// function countProps(object) {
//     let propCount = 0;
//     const keys = [];
//     // Change code below this line
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//       keys.push(key);
//       propCount += 1;
//       }
//     }
  
//     // Change code above this line
//     return propCount;
//   }
//   console.log(countProps({}));
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// 0
// 2
// 3

// 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//    values.push(apartment[key]);
  
// }
// // // Change code below this line
// console.log(keys);
// console.log(values);

// [ 'descr', 'rating', 'price' ]
// [ 'Spacious apartment in the city center', 4, 2153 ]

// 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object);
//   for (const key of keys) {
//       propCount += 1;
    
//   }

//   return propCount;
//   // Change code above this line
// }
//   console.log(countProps({}));
//   console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
  
// 0
// 2
// 3

// 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

// [ 'descr', 'rating', 'price' ]
// [ 'Spacious apartment in the city center', 4, 2153 ]

// 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const keys = Object.values(salaries);
//   for (const key of keys) {
//     totalSalary += key;
//       }
//   return totalSalary;
// }
//   console.log(countTotalSalary({}));
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
  
// 0
// 330
// 400

// 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//  hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
  
// }
// console.log(hexColors);
// console.log(rgbColors);

// [ '#f44336', '#2196f3', '#4caf50', '#ffeb3b' ]
// [ '244,67,54', '33,150,243', '76,175,80', '255,235,59' ]

// 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
        
//     }
//     return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// 1300
// 1200
// 2700
// 400
// null

// 19


//  const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arrProductValues = []
//   // Change code below this line
// for (const product of products) {
//     if(product[propName]) {
//        arrProductValues.push(product[propName])
//     }
// }
// return arrProductValues

//   // Change code above this line
// }

//     console.log(getAllPropValues("name"));
//     console.log(getAllPropValues("quantity"));
//     console.log(getAllPropValues("price"));
//   console.log(getAllPropValues("category"));
  
//   [ 'Radar', 'Scanner', 'Droid', 'Grip' ]
// [ 4, 3, 7, 9 ]
// [ 1300, 2700, 400, 1200 ]
// []

// 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
        
//     }
//     return 0;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// 0
// 5200
// 2800
// 10800
// 8100

// 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   }
//   const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  
//   console.log(highYesterday);
//   console.log(highToday);
//   console.log(highTomorrow);
//   console.log(highIcon);

// 28
// 26
// 33
// https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg

// 24
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const { hex, rgb} of colors) { 
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);

//   [ '#f44336', '#2196f3', '#4caf50', '#ffeb3b' ]
// [ '244,67,54', '33,150,243', '76,175,80', '255,235,59' ]

// 25

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
//   const {
//     today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//     tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   } = forecast;
//   console.log(highToday);
//   console.log(lowToday);
//   console.log(todayIcon);
  
//   console.log(highTomorrow);
//   console.log(lowTomorrow);
//   console.log(tomorrowIcon);
// 32
// 28
// https://www.flaticon.com/svg/static/icons/svg/861/861059.svg
// 31
// 27
// https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg

// 26

// Change code below this line
function calculateMeanTemperature(forecast) {
    const todayLow = forecast.today.low;
    const todayHigh = forecast.today.high;
    const tomorrowLow = forecast.tomorrow.low;
    const tomorrowHigh = forecast.tomorrow.high;
  
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }
    console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
    console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));