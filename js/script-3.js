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