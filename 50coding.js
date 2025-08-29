// 1. Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}
// 2. Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
  //   console.log(i);
}
// 3. Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  //   console.log(7 * i);
}

// 4. Print all the multiplication tables with numbers from 1 to 10.
const tables = (num) => {
  for (let i = 1; i <= 10; i++) {
    // console.log(num * i);
  }
};
// tables(3);

// 5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
// console.log(sum);

// 6. Calculate 10!
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
// console.log(factorial);

// 7. Calculate the sum of even numbers greater than 10 and less than 30.
let sumEven = 0;
for (let i = 10; i < 30; i++) {
  if (i > 10 && i % 2 === 0) {
    // console.log((sumEven += i));
  }
}

// 8. Create a function that will convert from Celsius to Fahrenheit.
const convertCelciusToFahren = (c) => {
  return (c * 9) / 5 + 32;
};
// console.log(convertCelciusToFahren(100));

// 9. Create a function that will convert from Fahrenheit to Celsius.
const convertFahrenToCelcius = (f) => ((f - 32) * 5) / 9;
// console.log(convertFahrenToCelcius(212));

// 10. Calculate the sum of numbers in an array of numbers.
const sumArr = (arr) => arr.reduce((sum, num) => sum + num, 0);
const arr10 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(sumArr(arr10));

// 11. Calculate the average of the numbers in an array of numbers.
const averageOfArr = (arr) => {
  let sum = 0;
  for (let num of arr) sum += num;
  let avg = sum / arr.length;
  return `The avrage of the given array is: ${avg}`;
};
const arr11 = [10, 5, 2, 3, 15, 1, 6];
// console.log(averageOfArr(arr11));

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers.
const positiveNumsOfArr = (arr) => {
  let positiveNums = [];
  for (let num of arr) if (num > 0) positiveNums.push(num);
  return positiveNums;
};
const arr12 = [100, -23, -80, 8, 30, 20, 134];
// console.log(positiveNumsOfArr(arr12));

// 13. Find the maximum number in an array of numbers.
const findMaxInArr = (arr) => {
  let maxNum = arr[0];
  for (let num of arr) if (maxNum < num) maxNum = num;
  return `Maximum number in the given array is: ${maxNum}`;
};
const arr13 = [12, 45, 7, 152.2, 87, 90, 152];
// console.log(findMaxInArr(arr13));

// 14. Print the first 10 Fibonacci numbers without recursion.
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

// console.log(printFibonacci(10));

// 15. Create a function that will find the nth Fibonacci number using recursion
const findNthFibonacciNum = (n) => {
  let series = printFibonacci(n);
  return `Nth Fibonacci number is: ${series[series.length - 1]}`;
};
// console.log(findNthFibonacciNum(10));

// 16.Create a function that will return a Boolean specifying if a number is prime
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};
// console.log(isPrime(10));
// console.log(isPrime(7));

// 17. Calculate the sum of digits of a positive integer number.
const sumOfDigits = (num) => {
  let sum = 0;
  let numArr = num.toString().split("");
  for (let num of numArr) {
    let digit = parseInt(num);
    sum += digit;
  }
  return sum;
};
// console.log(sumOfDigits(1238));

const sumOfDigits2 = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
// console.log(sumOfDigits2(456));

// 18. Print the first 100 prime numbers.
const checkIsPrime = (n) => {
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return true;
};
const printFirstPrimes = (value) => {
  let series = [];
  let count = 0;

  for (let i = 2; count < value; i++) {
    if (checkIsPrime(i)) {
      series.push(i);
      count++;
    }
  }

  return series;
};
// console.log(printFirstPrimes(100));

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
const printFirstPrimesGreaterThanNum = (total, n) => {
  let primes = [];
  let count = 0;
  for (let i = n + 1; count < total; i++) {
    if (isPrime(i)) {
      primes.push(i);
      count++;
    }
  }
  return primes;
};
// console.log(printFirstPrimesGreaterThanNum(10, 8));

// 20. Rotate an array to the left 1 position.
const rotateArrLeft = (arr) => {
  let firstEl = arr.shift();
  arr.push(firstEl);
  return arr;
};
const arr20 = [1, 2, 3, 4, 5, 6];
// console.log(rotateArrLeft(arr20));

// 21. Rotate an array to the right 1 position.
const rotateARrRight = (arr) => {
  let lastEl = arr.pop();
  arr.unshift(lastEl);
  return arr;
};
const arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(rotateARrRight(arr21));

// 22. Reverse an array.
const reverseArr = (arr) => arr.reverse();
const arr22 = [2, 4, 6, 8, 10];
// console.log(reverseArr(arr22));

const reversdArr = (arr) => {
  let result = [];
  for (let el of arr) {
    result.unshift(el);
  }
  return result;
};
// console.log(reversdArr(arr22));

// 23. Reverse a string.
const reverseStr = (str) => str.split("").reverse().join("");
// console.log(reverseStr("abcdef"));

// 24. Create a function that will merge two arrays and return the result as a new array
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
const arr24 = ["A", "B", "C", "D"];
const arrr24 = ["X", "Y", "Z"];
// console.log(mergeArrays(arr24, arrr24));

// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array  or second array but not in both.
const uniqueArr = (arr1, arr2) => {
  let result = [];
  for (let el of arr2) {
    if (!arr1.includes(el)) {
      result.push(el);
    }
  }
  for (let el of arr1) {
    if (!arr2.includes(el)) {
      result.push(el);
    }
  }
  return result;
};
const arr25 = [1, 3, 5, 7, 9, 11, 15];
const arrr25 = [1, 2, 3, 4, 5, 7, 9];
// console.log(uniqueArr(arr25, arrr25));

// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.
const diffArr = (arr1, arr2) => {
  let result = [];
  for (let el of arr1) {
    if (!arr2.includes(el)) {
      result.push(el);
    }
  }
  return result;
};
const arr26 = [2, 4, 6, 10, 20];
const arrr26 = [1, 3, 5, 10, 20];
// console.log(diffArr(arr26, arrr26));

// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements.
const removeDuplicates = (arr) => {
  let unique = [];
  for (let el of arr) if (!unique.includes(el)) unique.push(el);
  return unique;
};
const arr27 = [2, 3, 1, 2, 4, 4, 3, 1];
// console.log(removeDuplicates(arr27));

// 28. Calculate the sum of first 100 prime numbers and return them in an array.
const isPrimeNum = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};

const sumOfPrimes = (n) => {
  let primes = [];
  let sum = 0;
  let count = 0;
  for (let i = 2; count < n; i++) {
    if (isPrimeNum(i)) {
      primes.push(i);
      count++;
    }
  }
  sum = primes.reduce((sum, num) => sum + num, 0);
  return {
    sum: sum,
    primes: primes,
  };
};
// console.log(sumOfPrimes(100));

// 29. Print the distance between the first 100 prime numbers.
const printDistanceBetweenPrimes = (n) => {
  let result = [];
  let primes = [];
  let count = 0;
  for (let i = 2; count < n; i++) {
    if (isPrimeNum(i)) {
      primes.push(i);
      count++;
    }
  }
  for (let j = 0; j < primes.length - 1; j++) {
    let distance = primes[j + 1] - primes[j];
    result.push(distance);
  }
  return result;
};
// console.log(printDistanceBetweenPrimes(10));

// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
const addNumStrs = (numStr1, numStr2) => {
  let sum = parseInt(numStr1) + parseInt(numStr2);
  return sum.toString();
};
// console.log(addNumStrs("100", "99")); //Not correct for large data

// 31. Create a function that will return the number of words in a text.
const countWordsInString = (str) => str.split(" ").length;
// console.log(countWordsInString("This is coding round"));

// 32. Create a function that will capitalize the first letter of each word in a text.
const capitalizeFirstLetter = (str) => {
  let strArr = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return strArr;
};
// console.log(capitalizeFirstLetter("hellow world welcome to javascript"));

// 33. Calculate the sum of numbers received in a comma delimited string.
const sumNumStrComma = (str) => {
  let sum = str
    .split(",")
    .map((num) => Number(num.trim()))
    .reduce((total, curr) => total + curr, 0);
  return `The sum of numbers in the given string is : ${sum}`;
};
// console.log(sumNumStrComma("12,                  35, 8"));

// 34. Create a function that returns an array with words inside a text.
const arrFromStr = (str) => str.trim().split(/\s+/);
// console.log(arrFromStr("This is    array made from string      "));

// 35. Create a function to convert a CSV text to a “bi-dimensional” array.
const csvToArr = (str) => {
  let strArr = str.split("\n").map((word) => word.split(","));
  return strArr;
};
// console.log(csvToArr("name,age,city\nAlice,25,London\nBob,30,Paris"));

// 36. Create a function that converts a string to an array of characters.
const strToArr = (str) => str.trim().replace(/\s+/g, "").split("");
// console.log(strToArr("         Vi              ka             s  "));

// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
const asciiCodeOfChar = (str) => {
  let codeArr = str
    .trim()
    .replace(/\s+/g, "")
    .split("")
    .map((char) => char.charCodeAt(0));
  return codeArr;
};
// console.log(asciiCodeOfChar("vi  k  as   "));

// 38. Create a function that will convert an array containing ASCII codes in a string.
const asciiToStr = (arr) =>
  arr.map((code) => String.fromCharCode(code)).join("");
// console.log(asciiToStr([118, 105, 107, 97, 115]));

// 39. Implement the Caesar cypher.
const caesarCypher = (str, shift) => {};

// 40. Implement the bubble sort algorithm for an array of numbers.
const bubbleSort = (arr) => {
  let newArr = arr.slice();
  let length = newArr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
    }
  }
  return newArr;
};
const arr40 = [2, 7, 5, 1, 8, 3, 9, 4, 6];
// console.log(bubbleSort(arr40));

// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
const calculateDistanceXY = (x1, y1, x2, y2) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// console.log(calculateDistanceXY(10, 20, 100, 200));

// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting.
const areIntersecting = () => {};

// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number.

// 44. Create a function that will convert a string containing a binary number into a number.

// 45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels).
const sumJaggedArr = (arr) => {
  let sum = 0;
  for (let el of arr) {
    if (Array.isArray(el)) {
      sum += sumJaggedArr(el);
    } else {
      sum += el;
    }
  }
  return sum;
};
const arr45 = [10, [23, 12, [20, 2, 5], 1], 9, 67, [45, 43, [13]]];
// console.log(sumJaggedArr(arr45));

// 46. Find the maximum number in a jagged array of numbers or array of numbers.
const findMaxNumInJaggedArr = (arr) => {
  let maxNum = -Infinity;
  for (let el of arr) {
    if (Array.isArray(el)) {
      let subMax = findMaxNumInJaggedArr(el);
      if (maxNum < subMax) maxNum = subMax;
    } else {
      if (maxNum < el) maxNum = el;
    }
  }
  return maxNum;
};
const arr46 = [10, [23, 12, [20, 2, 5], 1], 9, 67, [45, 43, [13]]];
console.log(findMaxNumInJaggedArr(arr46));

// 47. Deep copy a jagged array with numbers or other arrays in a new array.

// 48. Create a function to return the longest word in a string.
const returnLongestWord = (str) => {
  let strArr = str.trim().split(" ");
  let longestWord = strArr[0];
  for (let word of strArr)
    if (longestWord.length < word.length) longestWord = word;
  return `The longest word in the given string is:"${longestWord}"`;
};
// console.log(returnLongestWord(" find the longest wordssss"));

// 49. Shuffle an array of strings.
const shuffleArrOfStr = (arr) => {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]];
  }

  return newArr;
};
const arr49 = ["shuffle", "this", "array", "randomly"];
// console.log(shuffleArrOfStr(arr49));

// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.

// 51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.
