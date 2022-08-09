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
//       propCount = keys.length;
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