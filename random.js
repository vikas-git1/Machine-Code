// Q1. Write a function that returns the reverse of a string?
const reverseStr = (str) => str.split("").reverse().join("");
// console.log(reverseStr("abcde"));

// Q2. Write a function that returns the longest word in the sentence.
const findLongestWord = (str) => {
  let strArr = str.split(" ");
  let longestWord = strArr[0];

  for (let word of strArr) {
    if (word.length > longestWord.length) longestWord = word;
  }
  return `The Longest word in the given string is ${longestWord}`;
};
// console.log(findLongestWord("My name is Vikas"));

// Q3. Write a function that checks whether a given string is a palindrome or not?
const isPalindrome = (str) => {
  let newStr = str.split("").reverse().join("");
  return newStr === str
    ? `Yes, the given string "${str}" is Palindrome`
    : `No, the given string "${str}" is not palindrome`;
};
// console.log(isPalindrome("madam"));

// Q4. Write a function to remove duplicate elements from an array.
const removeDuplicates = (arr) => {
  let uniqueArr = [];
  for (let el of arr) {
    if (!uniqueArr.includes(el)) {
      uniqueArr.push(el);
    }
  }
  return uniqueArr;
};
const arr4 = [1, 1, 2, 3, 4, 4, 3, 5, 6, 1, 2];
// console.log(removeDuplicates(arr4));

// Q5. Write a function that checks whether two strings are anagrams or not?
const checkAnagrams = (str1, str2) => {
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2
    ? `Yes, the given strings "${str1}" and "${str2}" are anagrams of each other`
    : `No, the given strings "${str1}" and "${str2}" are not anagrams of each other`;
};
let str1 = "cricket";
let str2 = "ekticcr";
// console.log(checkAnagrams(str1, str2));

// Q6. Write a function that returns the number of vowels in a string.
const countVowels = (str) => {
  let targetStr = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let char of targetStr) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return `total number of vowels present in the given string "${str}" are ${count}`;
};
// console.log(countVowels("GolUOu"));

// Q7. Write a function to find the largest number in an array.
const findLargestNum = (arr) => {
  let largestNum = arr[0];
  for (let num of arr) {
    if (largestNum < num) {
      largestNum = num;
    }
  }
  return `The Largest number in the given array is "${largestNum}"`;
};
const arr7 = [1, 8, 12, 17, 1, 32, 3, 14, 4, 3, 5, 6, 1, 2];
// console.log(findLargestNum(arr7));

// Q8. Write a function to check if a given number is prime or not?
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `The given number "${num}" is not a Prime Number`;
    }
  }
  return `The given number "${num}" is  a Prime Number`;
};
// console.log(isPrime(27));

// Q9. Write a function to calculate the factorial of a number.
const calculateFactorial = (num) => {
  if (num < 1) return `Please enter a valid number`;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return `The factorial of the given number "${num}" is "${fact}"`;
};
// console.log(calculateFactorial(-3));

// Q10. Write a program to remove all whitespace characters from a string.
const removeWhiteSpace = (str) => str.replace(/\s+/g, "").length;
// console.log(removeWhiteSpace("     vi    ka    s     "));

// Q11. Write a function to find the sum of all elements in an array
const sumOfArr = (arr) => arr.reduce((sum, num) => num + sum, 0);
// console.log(sumOfArr(arr7));

// Q12. Write a function to find the average of an array of numbers.
const findAverage = (arr) => {
  let sum = 0;
  let length = arr.length;
  for (let num of arr) sum += num;
  let avg = sum / length;
  return `The Average of the given Array is ${avg}`;
};
const arr8 = [10, 3, 5, 2];
// console.log(findAverage(arr8));

// Q13. Write a function to sort an array of numbers in ascending order.
const sortArrinAscOrder = (arr) => arr.sort((a, b) => a - b);
// console.log(sortArrinAscOrder(arr8));

// Q14. Write a function to check if a given array is sorted in ascending order or not.

// Q15. Write a function to merge two arrays into a single sorted array.
const mergeArr = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
// console.log(mergeArr(arr7, arr8));

// Q16. Write a function to remove a specific element from an array.

// Q17. Write a function to find the second largest element in an array.

// Q18. Write a function to reverse the order of words in a given sentence.

// Q19. Write a function to find the longest common prefix among an array of strings.

// Q20. Write a function to find the intersection of two arrays.

// Q21. Write a function to calculate the Fibonacci sequence up to a given number.
