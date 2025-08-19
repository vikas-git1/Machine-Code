// 🔹 1. Array & String Manipulation

// ❖ Implement map, filter, reduce polyfills
//1. Reverse a string / number.
const reverseStr = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// console.log(reverseStr("abcde"));

const reverseNum = (num) =>
  parseInt(num.toString().split("").reverse().join(""));

// console.log(reverseNum(120));

//2. Check if a string is a palindrome.
const checkPalindrome = (str) => {
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
};
// console.log(checkPalindrome("madam"));

//3. Find the second largest number in an array.
const secondLargestNum = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  let result = sortedArr.at(-2);
  return { SecondLargestNum: result };
};
const arr = [2, 3, 4, 1, 5, 7, 2, 0, 1];
// console.log(secondLargestNum(arr));

//4. Remove duplicates from an array.
const removeDuplicates = (arr) => {
  let uniqueArr = [];
  for (let el of arr) {
    if (!uniqueArr.includes(el)) {
      uniqueArr.push(el);
    }
  }
  return uniqueArr;
};
const arr4 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// console.log(removeDuplicates(arr4));

//5. Find missing number in a range
const findMissingNum = (arr) => {
  let missingNum;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1] - 1) {
      missingNum = arr[i] + 1;
    }
  }
  return missingNum;
};
const arr5 = [11, 12, 13, 14, 16, 17];
// console.log(findMissingNum(arr5));

//6. Check if two strings are anagrams
const checkAnagrams = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let str1Sort = str1.split("").sort().join("");
  let str2Sort = str2.split("").sort().join("");
  return str1Sort === str2Sort
    ? `Yes, both strings ${str1} and ${str2} are anagrams`
    : `No , both strings ${str1} and ${str2} are not anagrams`;
};
let srt6a = "vikas";
let srt6b = "kivas";
// console.log(checkAnagrams(srt6a, srt6b));

//7 Find intersection/union of two arrays.
const findIntersectionUnion = (arr1, arr2) => {
  let intersection = [];
  let union = [];
  for (let el of arr2) {
    if (arr1.includes(el)) {
      intersection.push(el);
    } else {
      union.push(el);
    }
  }
  return {
    Intersection: intersection,
    Union: union,
  };
};
const arr7a = [1, 2, 4, 6, 7, 8, 9];
const arr7b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(findIntersectionUnion(arr7a, arr7b));

// ❖ Flatten nested array [1,[2,[3,4],5],6] → [1,2,3,4,5,6]
// ❖ Shuffle an array randomly.
const shuffleArr = (arr) => {
  let shuffledArr = [];
};

// 🔹 2. Functions & Closures

// ❖ Write a function that works for both sum(2,3) and sum(2)(3)
// ❖ Implement currying (sum(1)(2)(3))
// ❖ Implement function composition (compose / pipe)
// ❖ Write a memoization function
// ❖ Closure-based counter function (increment, decrement, reset)

// 🔹 3. Objects & Comparisons

// ❖ Deep clone an object
// ❖ Check if two objects are equal
// ❖ Convert array of objects to grouped object (e.g., group by age)
// ❖ Implement Object.create() polyfill

// 🔹 4. Promises & Async

// ❖ Simple promise polyfill
// ❖ Convert callback → promise
// ❖ Write function to retry an API call 3 times
// ❖ Function to limit API calls per second (rate limiting)
// ❖ Sequential vs parallel API calls
// ❖ Simulate Promise.all / Promise.race polyfill

// 🔹 5. Event & DOM

// ❖ Explain & implement event delegation
// ❖ Implement debounce
// ❖ Implement throttle
// ❖ Simulate setInterval using setTimeout
// ❖ Infinite scroll logic (load more data on scroll)

// 🔹 6. Classic Logic Questions

// ❖ Factorial (loop + recursion)
// ❖ Fibonacci sequence (loop + recursion)
// ❖ Binary search (iterative + recursive)
// ❖ Find prime numbers in range
// ❖ Count vowels in a string

// 🔹 7. Advanced (sometimes asked)

// ❖ Implement a simple LRU cache
// ❖ Write a polyfill for bind, call, apply
// ❖ Implement custom new operator
// ❖ Implement custom instanceof operator
