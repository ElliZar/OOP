/* eslint-disable require-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

// +++++++TASK1++++++++++

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// var keys = Object.keys(student);
// console.log(keys);

// +++++++TASK2++++++++++

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// console.log(student);

// for (let key in student) {
//   if (key === "rollno") {
//     delete student[key];
//   }
// };
// console.log(student);

// +++++++TASK3++++++++++

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// const keys = Object.keys(student);
// console.log(keys.length);

// +++++++TASK4++++++++++

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// var readingStatus = library.map(function(item) {
//   var needRead = "";
//   var read = "";
//   if (!item.readingStatus) {
//     needRead = `You must read this book ${item.title}, ${item.author}`;
//   }
//   if (item.readingStatus) {
//     read = `You read this book ${item.title}, ${item.author}`;
//   }
//   return needRead + read;
// });
// console.log(readingStatus);

// +++++++TASK7++++++++++

// var str = "dog";

// function subString(arr) {
//   var sub = [];
//   for (var m = 0; m < arr.length; m++) {
//     for (var n = m + 1; n < arr.length + 1; n++) {
//       sub.push(arr.slice(m, n));
//     };
//   }
//   return sub;
// };
// console.log(subString(str));

// +++++++TASK7++++++++++

// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     libraryID: 1254,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     libraryID: 4264,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];

// var newArr = library.map(function(item) {
//   var ordered = {};
//   Object.keys(item).sort().forEach(function(key) {
//     ordered[key] = item[key];
//   });
//   return ordered;
// });
// console.log(newArr);
