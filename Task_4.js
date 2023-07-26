// Problem 1: Find the Maximum Write a JavaScript function named findMax that takes an array of numbers as input and returns the maximum value from the array. If the array is empty, the function should return null.
// Example:
// findMax([3, 5, 1, 9, 2]); // Output: 9
// findMax([]); // Output: null

// let MaxVal = function findMax() {
//   const arr = [1, 3, 5, 4, 6, 7, 33, 99, 22];
//   if (arr.length == 0) {
//     return null;
//   } else {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//       if (max < arr[i]) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
// };

// console.log(MaxVal());

//Problem 2: Count Occurrences Write a JavaScript function named countOccurrences that takes an array of elements and a target element as input and returns the number of occurrences of the target element in the array.
// Example:
// countOccurrences([1, 2, 3, 4, 2, 1, 2], 2); // Output: 3
// countOccurrences(['a', 'b', 'c', 'a'], 'a'); // Output: 2

// let counter = function countOccurrences() {
//   arr1 = [1, 2, 3, 4, 2, 1, 2];
//   arr2 = ["a", "b", "c", "a"];

//   let rep1 = 2;
//   let rep2 = "a";
//   let coun1 = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (rep1 == arr1[i]) {
//       coun1++;
//     }
//   }
//   return coun1;
// };

// console.log(counter());

//Problem 3: Reverse String Write a JavaScript function named `reverseString` that takes a string as input and returns a reversed version of the input string.
// Example:
// reverseString('Hello'); // Output: 'olleH'
// reverseString('JavaScript'); // Output: 'tpircSavaJ'

// let reverseString = function reversing() {
//   let string = "I am a Student:";
//   let newStr = "";
//   for (var i = string.length - 1; i >= 0; i--) {
//     newStr += string[i];
//   }
//   console.log(newStr);
// };
// reverseString();

//Problem 4: Prime Numbers Write a JavaScript function named isPrime that takes a number as input and returns true if the number is prime, and false otherwise. A prime number is a positive integer greater than 1 that is divisible only by 1 and itself.
// Example:
// isPrime(7); // Output: true
// isPrime(12); // Output: false

// let isPrime = function check(n) {
//   if (n > 0) {
//     for (var i = 2; i < n; i++) {
//       if (n % 2 == 0) {
//         console.log("This is not a prime number");
//       } else {
//         console.log("This is a Prime Number");
//       }
//     }
//     console.log("This is not a Prime Number");
//   } else {
//     console.log("Enter a positive number");
//   }
//   //   console.log(n);
// };
// isPrime(2);

//Problem 5: Palindrome Check Write a JavaScript function named isPalindrome that takes a string as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
// Example:
// isPalindrome('racecar'); // Output: true
// isPalindrome('Hello'); // Output: false
// function Check(string) {
//   let length = string.length;
//   debugger;
//   for (let i = 0; i < length / 2; i++) {
//     // check if first and last string are same
//     if (string[i] != string[length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// // isPalindrome;
// console.log(Check("cartcjdksnfkjsehnrac"));

// Problem 6: FizzBuzz Write a JavaScript function named fizzBuzz that takes a number as input and returns:
// •	"Fizz" if the number is divisible by 3.
// •	"Buzz" if the number is divisible by 5.
// •	"FizzBuzz" if the number is divisible by both 3 and 5.
// •	The number itself if none of the above conditions are met.
// Example:
// fizzBuzz(3); // Output: "Fizz"
// fizzBuzz(10); // Output: "Buzz"
// fizzBuzz(15); // Output: "FizzBuzz"
// fizzBuzz(8); // Output: 8

// let fizzBuzz = function check(n) {
//   if (n % 3 == 0 && n % 5 == 0) {
//     return "FizzBuzz";
//   } else if (n % 3 == 0) {
//     return "Fizz";
//   } else if (n % 5 == 0) {
//     return "Buzz";
//   } else {
//     return n;
//   }
// };

// console.log(fizzBuzz(4));

// Problem 7: Factorial Write a JavaScript function named factorial that takes a positive integer as input and returns the factorial of that number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// Example:
// factorial(5); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
// factorial(0); // Output: 1 (0! is defined as 1)
// let factorial = function fact(n) {
//   let fact = 1;
//   for (var i = n; i > 0; i--) {
//     fact = fact * n;
//     n--;
//   }
//   return fact;
// };
// console.log(factorial(5));

// Problem 8: Fibonacci Sequence Write a JavaScript function named fibonacci that takes a positive integer n as input and returns an array containing the first n numbers in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.
// Example:
// fibonacci(5); // Output: [0, 1, 1, 2, 3]
// fibonacci(8); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// let fibonacci = function fab(n) {
//   let curr = 1,
//     prev = 0;
//   debugger;
//   const arr = [];
//   if (n >= 0) {
//     arr.push(0);
//   } else {
//     return false;
//   }
//   for (var i = 0; i < n - 1; i++) {
//     // Output: [0, 1, 1, 2, 3]
//     let sum = prev + curr;
//     arr.push(sum);
//     curr = arr[i + 1];
//     prev = arr[i];
//   }
//   return arr;
// };
// console.log(fibonacci(8));

// Problem 9: Capitalize Words Write a JavaScript function named capitalizeWords that takes a string as input and returns a new string where each word in the input string is capitalized.
// Example:
// capitalizeWords('hello world'); // Output: 'Hello World'
// // capitalizeWords('javascript is awesome'); // Output: 'Javascript Is Awesome'

// let string = "hello world! this is hamza";
// let replace, newrep;
// let arr = [];
// // let hello = string.toUpperCase();
// let str2 = string.charAt(0).toUpperCase();
// // console.log(hello);

// // console.log(string);

// for (var i = 0; i < string.length; i++) {
//   if (string[i] == " ") {
//     arr.push(string.indexOf(string[i + 1]));
//   }
//   let str3 = string.charAt().toUpperCase();
//   console.log(arr);
// }
// String.indexf();
// // last = str2 + newrep;
// // console.log(last);
// // return replace;

//--------------------------------------------------------------------------------------------------
// const mySentence = "Hello World! This is me";
// const words = mySentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// for (var u = 0; u < words.length; u++) {
//   console.log(words[u]);
// }

// Problem 10: Array Sum Write a JavaScript function named arraySum that takes an array of numbers as input and returns the sum of all the numbers in the array.
// Example:
// arraySum([1, 2, 3, 4, 5]); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
// arraySum([-1, 0, 1]); // Output: 0 (-1 + 0 + 1 = 0)

// let arraySum = function check() {
//   let array = [1, 2, 3, 4, 5, 5];
//   let sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// };
// console.log(arraySum());
