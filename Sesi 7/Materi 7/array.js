//Array
// Deklarasi array
/*
let arr_bilangan = [1, 2, 3, 4, 5];
let arr_str = ["a", "buku", "bisa juga kalimat"];
let arr_bol = [true, false, false, true];
*/

// Operasi array - PUSH
/*
let arr_bil = [10, 29, 2, 3];
console.log(arr_bil);
arr_bil.push(24);
console.log(arr_bil);
*/

// Operasi array - SHIFT
/*
const array1 = [1, 2, 3];
console.log(array1);
const firstElement = array1.shift();
console.log(firstElement);
*/

// Operasi array - UNSHIFT
/*
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);
*/

// Operasi array - SPLICE
/*
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "feb");
console.log(months);
months.splice(4, 1, "May");
console.log(months);
*/

//Array Multidimensi
let arr = [
  [1, 2, 3],
  [7, 3],
  [91, 8, 100, 30],
];
console.log(arr);

// arr[0].shift();
// console.log(arr);

arr[1].unshift(4, 5);
console.log(arr);
