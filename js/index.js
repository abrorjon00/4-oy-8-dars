// function findLongestWord(arr) {
//     let longest = "";
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length > longest.length) {
//         longest = arr[i];
//       }
//     }
//     return longest;
// }
  
// 
//   let words = ["olma", "kiwi", "banan", "shaftoli"];
//   console.log(findLongestWord(words)); // "shaftoli"
    
//  2-masala
// function string(arr) {
//     return arr.join("");
//   }
  
//  
//   let strings = ["Hello", " ", "Goodbye", "!"];
//   console.log(string(strings)); // "Hello World!"

// 3-masala

// function BigWordsArray(arr) {
//     return arr.map(element => element.toUpperCase());
//   }
  
//  
//   let lowerCaseWords = ["hello", "world"];
//   console.log(BigWordsArray(lowerCaseWords)); // ["HELLO", "WORLD"]

// 4-masala

// function multiplyArrayElements(arr) {
//     let res = 1;
//     for (let i = 0; i < arr.length; i++) {
//       res *= arr[i];
//     }
//     return res;
//   }
   
//   let numbers = [1, 2, 3, 5];
//   console.log(multiplyArrayElements(numbers)); // 30
  
//   6-masala
//   function reverseArray(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       newArr.push(arr[i]);
//     }
//     return newArr;
//   }
  
  
//   let originalArray = [1, 2, 3, 4];
//   console.log(reverseArray(originalArray)); // [4, 3, 2, 1]
 
// 7-masala

// let arr = [2, 4, 5];
// arr.forEach(function(value,index) {
//     console.log(index);
// });

// 8-masala
// function findIndex(array, number) {
//   return array.indexOf(number);
// }


// console.log(findIndex([1, 2, 3, 4, 5], 3)); // 2


// 11-masala
// function repeatArray(array, n) {
//   let result = [];
//   for (let i = 0; i < n; i++) {
//       result = result.concat(array);
//   }
//   return result;
// }


// console.log(repeatArray([1, 2, 3], 3)); // [1, 2, 3, 1, 2, 3, 1, 2, 3]


// 12-masala
// function arrayToString(array) {
//   return array.map(element => String(element));
// }


// console.log(arrayToString([1, 2, 3])); // ["1", "2", "3"]
// 13-masala
// function evenIndexedElements(array) {
//   return array.filter((_, index) => index % 2 === 0);
// }

// // Misol:
// console.log(evenIndexedElements([1, 2, 3, 4, 5])); // [1, 3, 5]

// 14-masala
// function countOddNumbers(array) {
//   return array.filter(element => element % 2 !== 0).length;
// }


// console.log(countOddNumbers([1, 2, 3, 4, 5])); // 3

// 15-masala
// function findMinMax(array) {
//   let min = Math.min(...array);
//   let max = Math.max(...array);
//   return { min, max };
// }


// console.log(findMinMax([1, 2, 3, 4, 5])); // { min: 1, max: 5 }

// 16-masala
// function doubleElements(array) {
//   return array.map(element => element * 2);
// }


// console.log(doubleElements([1, 2, 3])); // [2, 4, 6]

// 19-masala
// function removeNonStrings(array) {
//   return array.filter(element => typeof element === 'string');
// }


// console.log(removeNonStrings([1, "hello", 2, "world", 3])); // ["hello", "world"]

// 22-masala
// function sqrtElements(array) {
//   return array.map(element => Math.sqrt(element));
// }


// console.log(sqrtElements([1, 4, 9, 16, 25])); // [1, 2, 3, 4, 5]

// 23-masala
// function positiveOrZero(array) {
//   return array.filter(element => element >= 0);
// }


// console.log(positiveOrZero([1, -2, 3, -4, 5])); // [1, 3, 5]
