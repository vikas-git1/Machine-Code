//!1 Two Sum — classic interview favorite (hashmap / O(n)).
const twoSum = (arr, target) => {};
const arr1 = [23, 7, 2, 11, 15];
// console.log(twoSum(arr1, 9));

//! 2 Reverse a string (built-in vs manual) — fundamental.
const reverseStr = (str) => str.split("").reverse().join("");
// console.log(reverseStr("vikas"));

const reverseString = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};
// console.log(reverseString("vikas"));

//! 3 Check if a string is a palindrome — simple string logic checks.
const isPalindrome = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrome("bob"));
// console.log(isPalindrome("bod"));

//! 4 Remove duplicates from an array — Set / filter basics.
const removeDuplicatesFromArr = (arr) => [...new Set(arr)];
const arr4 = [1, 2, 2, 3, 4, 5, 6, 5, 3, 2];
// console.log(removeDuplicatesFromArr(arr4));

const removeDuplicatesFromArray = (arr) => {
  let uniqueArr = [];
  for (let el of arr) if (!uniqueArr.includes(el)) uniqueArr.push(el);
  return uniqueArr;
};
// console.log(removeDuplicatesFromArray(arr4));

const removeDuplicates = (arr) => {
  return arr.filter((el, index) => arr.indexOf(el) === index);
};
// console.log(removeDuplicates(arr4));

//! 5 Find the maximum number in an array — reduce or loop.
const arr5 = [4, 7, 9, 23, 65, 12, 654, 21, 33];
const findMax = (arr) => {
  let maxNum = arr[0];
  for (let num of arr) if (maxNum < num) maxNum = num;
  return maxNum;
};
// console.log(findMax(arr5));

const findMaxNum = (arr) =>
  arr.reduce((num, curr) => (num > curr ? num : curr));
// console.log(findMaxNum(arr5));

//! 6 Sum of all numbers in an array — reduce/fold.
const arr6 = [4, 71, 29, 23, 65, 12, 654, 21, 33];
const sumNum = (arr) => arr.reduce((sum, num) => (sum += num), 0);
// console.log(sumNum(arr6));

const sumNumber = (arr) => {
  let sum = 0;
  for (let num of arr) sum += num;
  return sum;
};
// console.log(sumNumber(arr6));


//! 8 Capitalize first and last letter of each word — string manipulation.
const capitalizeFirstLetter = (str) => {
  let strArr = str
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => {
      if (word.length === 1) return word.toUpperCase();
      return (
        word[0].toUpperCase() + word.slice(1, -1) + word.at(-1).toUpperCase()
      );
    })
    .join(" ");
  return strArr;
};
// console.log(capitalizeFirstLetter("this is  vikas mewara"));

//! 9 Count frequency of chars in string / elements in array — hash map patterns.
const countFreqOfChar = (str) => {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
};
// console.log(countFreqOfChar("abfccddesfa"));

//! 10 Implement array flatten (multi-depth) — recursion or stack, JSON style.

//! 11 Find missing number in array 1..n — math or XOR trick.

//! 12 Find intersection / union of two arrays — Set operations.

// Implement debounce/throttle — essential for JS UI performance.

//! 13 Fibonacci sequence (iterative & recursive) — recursion + optimization.
const printFibonacci = (n) => {
  let series = [];
  if (n < 1) return series;
  if (n >= 1) series.push(0);
  if (n >= 2) series.push(1);
  for (let i = 2; i < n; i++) {
    let nextNum = series[i - 1] + series[i - 2];
    series.push(nextNum);
  }
  return series;
};
// console.log(printFibonacci(1));
// console.log(printFibonacci(2));
// console.log(printFibonacci(10));

const printFibonacciSeq = (n) => {
  if (n < 1) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let series = printFibonacci(n - 1);
  series.push(series[series.length - 1] + series[series.length - 2]);
  return series;
};
// console.log(printFibonacciSeq(10));

//! 14 Sum of digits of a number — math or string conversion.
const sumOfDigits = (num) => {
  let numStr = num.toString();
  let sum = 0;
  for (let num of numStr) {
    sum += Number(num);
  }
  return sum;
};
// console.log(sumOfDigits(2090));

const sumOfDigitsOfNum = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
// console.log(sumOfDigitsOfNum(23786));

//! 15 Find first non-repeating char in string — combination of frequency and index.
const firstNonRepeatingChar = (str) => {
  let freq = {};
  for (let char of str) freq[char] = (freq[char] || 0) + 1;
  for (let char of str) if (freq[char] === 1) return char;
};
// console.log(firstNonRepeatingChar("hheelloww"));

//! 16 Rotate array left/right by k — index calculation, modular arithmetic.
const rotateArrToLeft = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let removedEl = arr.shift();
    arr.push(removedEl);
  }
  return arr;
};
const arr16 = [1, 2, 3, 4, 5, 6];
// console.log(rotateArrToLeft(arr16, 3));

const rotateArrToRight = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let removedEl = arr.pop();
    arr.unshift(removedEl);
  }
  return arr;
};
const arr16b = [10, 20, 30, 40, 50, 60];
// console.log(rotateArrToRight(arr16b, 2));

//! 17 Move zeros to end (or move positives/negatives) — in-place partition logic.
const moveZerosToEnd = (arr) => {};
const arr17 = [1, 2, 0, 3, 0, 0, 4, 0, 5];
// console.log(moveZerosToEnd(arr17));

//! 18 Implement basic sorting (bubble/selection/insertion) — algorithm knowledge.
const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};
const arr18 = [1, 4, 7, 9, 2, 8, 3, 5, 6];
// console.log(bubbleSort(arr18));

//! 19 Binary search (sorted array) — search fundamentals.

//! 20 Find all prime numbers below n — sieve or trial division.
const printPrimes = (n) => {
  let primes = [];

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};
// console.log(printPrimes(10));

//! 21 Print first n prime numbers — iteration + isPrime helper.
const printFirstPrimes = (n) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const primes = [];
  let count = 0;
  for (let i = 2; count < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
      count++;
    }
  }
  return primes;
};
// console.log(printFirstPrimes(10));

//! 22 Nth Fibonacci (recursion) — recursion with memo possibility.
const printNthFibonacci = (n) => {
  if (n < 1) return `Enter a valid number`;
  if (n === 1) return 0;
  if (n === 2) return 1;
  let a = 0,
    b = 1,
    fib;
  for (let i = 3; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
};
// console.log(printNthFibonacci(10));

// Implement custom map/filter/reduce — functional programming understanding.

//! 23 Merge two sorted arrays — merging pattern.
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
const arr23a = [1, 3, 5, 7];
const arr23b = [2, 4, 6, 8];
// console.log(mergeArrays(arr23a, arr23b));

//! 24 Find Kth largest/smallest element — heap or selection algorithm.

//! 25 Check if two strings are permutations — sorting or frequency.

const checkPermutaionsSort = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};
// console.log(checkPermutaionsSort("hey", "hey"));

const checkPermutaions = (str1, str2) => {
  for (let char of str1) {
    if (!str2.includes(char)) {
      return false;
    }
  }
  return true;
};
// console.log(checkPermutaions("hellow", "wllhoe"));

//! 26 Find longest/shortest word in a string — split + reduce.
const findLongestShortestWord = (str) => {
  let strArr = str.split(" ");
  let longestWord = strArr[0];
  let shortestWord = strArr[0];
  for (let word of strArr) {
    if (longestWord.length < word.length) longestWord = word;
    if (shortestWord.length > word.length) shortestWord = word;
  }
  return { ShortestWord: shortestWord, LongestWord: longestWord };
};
// console.log(findLongestShortestWord("This is the Place"));

const findLongestShortestWordReduce = (str) => {
  let words = str.split(" ");
  let longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));
  let shortestWord = words.reduce((a, b) => (a.length < b.length ? a : b));
  return { ShortestWord: shortestWord, LongestWord: longestWord };
};
// console.log(findLongestShortestWordReduce("Hellow World from Earth"));

//! 27 Reverse words in a string — split, reverse, join.
const reverseStrReverse = (str) => str.split(" ").reverse().join(" ");
// console.log(reverseStrReverse("Fuck this shit"));

//! 28 Count vowels/consonants in a string — iteration + checking.
const countVowelsConsonants = (str) => {
  let vowels = "aeiou";
  let vowelsCount = 0,
    consonantsCount = 0,
    spaceCount = 0;
  let newStr = str.toLowerCase();
  for (let char of newStr) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else if (char >= "a" && char <= "z") {
      consonantsCount++;
    } else if (char === " ") {
      spaceCount++;
    }
  }
  return {
    VowelsCount: vowelsCount,
    ConsonantsCount: consonantsCount,
    SpaceCount: spaceCount,
  };
};
// console.log(countVowelsConsonants("Count the chars"));

//! 29 Check if integer is power of two — bit manipulation.
const isPowerOfTwo = (num) => {
  if (num < 1) return false;
  for (let i = 0; i <= num; i++) {
    if (num === Math.pow(2, i)) {
      return true;
    }
    if (num < Math.pow(2, i)) {
      break;
    }
  }
  return false;
};
// console.log(isPowerOfTwo(16));


//! 33 Find duplicates in an array — frequency or Set detection.
const arr33 = [1, 4, 8, 3, 21, 1, 3, 4, 25];

const findDuplcicates = (arr) => {
  let freq = {};
  for (let el of arr) {
    freq[el] = (freq[el] || 0) + 1;
  }
  let duplicates = Object.keys(freq)
    .filter((key) => freq[key] > 1)
    .map(Number);
  return duplicates;
};
// console.log(findDuplcicates(arr33));

//! 34 Custom implementation of Promise (or async/await explanation) — deep JS knowledge.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = Math.random() > 0.5;
    if (success) {
      resolve("The promise is resolved");
    } else {
      reject("The promise is rejected");
    }
  }, 1000);
});

const handlePromise = async () => {
  try {
    let response = await myPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
handlePromise();
