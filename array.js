//!1. Reverse an array
const arr1 = [1, 2, 3, 4, 5];
const reverseArray = (arr) => {
  let reversedArr = [];
  for (let el of arr) {
    reversedArr.unshift(el);
  }
  return reversedArr;
};
// console.log(reverseArray(arr1));

const reverseArr = (arr) => arr.reverse();
// console.log(reverseArr(arr1));

//!2 Find the sum of all elements in an array.
const arr2 = [22, 44, 77, 88, 99];

const sumOfNumsInArrayReduce = (arr) =>
  arr.reduce((sum, num) => (sum += num), 0);
// console.log(sumOfNumsInArrayReduce(arr2));

const sumOfNumsInArray = (arr) => {
  let sum = 0;
  for (let num of arr) sum += num;
  return sum;
};
// console.log(sumOfNumsInArray(arr2));

//!3 Find the largest/smallest number in an array.
const arr3 = [17, 82, 45, 12, 95, 89, 10, 9];
const largestSmallestNumInArray = (arr) => {
  let largestNum = arr[0];
  let smallestNum = arr[0];
  for (let num of arr) {
    if (largestNum < num) largestNum = num;
    if (smallestNum > num) smallestNum = num;
  }
  return {
    largestNum: largestNum,
    smallestNum: smallestNum,
  };
};
// console.log(largestSmallestNumInArray(arr3));

const largestSmallestNumInArrayReduce = (arr) => {
  return {
    largestNum: arr.reduce((a, b) => (a < b ? b : a)),
    smallestNum: arr.reduce((a, b) => (a > b ? b : a)),
  };
};
// console.log(largestSmallestNumInArrayReduce(arr3));

//!4 Sort an array in ascending/descending order.
const arr4 = [13, 56, 32, 9, 86, 12, 75];
const sortArrInAscendingOrder = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
// console.log(sortArrInAscendingOrder(arr4));

const sortArrInDecendingOrder = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
// console.log(sortArrInDecendingOrder(arr4));

const sortArrInAscendingDescendingOrder = (arr) => {
  let ascArr = [...arr].sort((a, b) => a - b);
  let decArr = [...arr].sort((a, b) => b - a);
  return {
    AscendingOrder: ascArr,
    DescendingOrder: decArr,
  };
};
// console.log(sortArrInAscendingDescendingOrder(arr4));

//! 5 Remove duplicates from an array.
const arr5 = [1, 1, 2, 3, 4, 3, 4, 2, 1, 5, 2, 5];
const removeDuplicates = (arr) => {
  let uniqueArr = [];
  for (let el of arr) if (!uniqueArr.includes(el)) uniqueArr.push(el);
  return uniqueArr;
};
// console.log(removeDuplicates(arr5));

const removeDuplicatesSet = (arr) => [...new Set(arr)];
// console.log(removeDuplicatesSet(arr5));

const removeDuplicatesFilter = (arr) =>
  arr.filter((el, index) => arr.indexOf(el) === index);
// console.log(removeDuplicatesFilter(arr5));

//!6 Merge two arrays
const arr6 = [1, 4, 7, 9];
const arr6a = [2, 3, 5, 6, 8];
const mergeArraysSpread = (arr1, arr2) =>
  [...arr1, ...arr2].sort((a, b) => a - b);
// console.log(mergeArraysSpread(arr6, arr6a));

const mergeArraysConcat = (arr1, arr2) =>
  arr1.concat(arr2).sort((a, b) => b - a);
// console.log(mergeArraysConcat(arr6, arr6a));

//!17 Find the intersection of two arrays
const arr17 = [1, 22, 6, 8, 98, 43, 1];
const arr17a = [1, 2, 61, 18, 98, 43, 10];

const findIntersection = (arr1, arr2) => {
  let result = [];
  for (let el of arr1) if (arr2.includes(el)) result.push(el);
  return result;
};
// console.log(findIntersection(arr17, arr17a));

const findIntersectionFilter = (arr1, arr2) =>
  arr1.filter((el) => arr2.includes(el));
// console.log(findIntersectionFilter(arr17, arr17a));

//!18 Rotate an array left/right by n steps
const rotateArrToLeft = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let removedEl = arr.shift();
    arr.push(removedEl);
  }
  return arr;
};
const arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(rotateArrToLeft(arr18, 3));

const rotateArrToRight = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let removedEl = arr.pop();
    arr.unshift(removedEl);
  }
  return arr;
};
const arr18a = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(rotateArrToRight(arr18, 3));

//!19 Find missing number(s) in an array
const findMissingNum = (arr) => {
  let missingNums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    for (let num = current + 1; num < next; num++) missingNums.push(num);
  }
  return missingNums;
};
const arr19 = [40, 46, 47, 48, 50, 52, 54, 60];
// console.log(findMissingNum(arr19));

//!20 Move zeros to the end of an array
const moveZerosToEnd = (arr) =>
  arr.filter((el) => el > 0).concat(arr.filter((el) => el === 0));
const arr20 = [2, 0, 3, 4, 50, 0, 123, 0, 8];
// console.log(moveZerosToEnd(arr20));

// 🔹 Tier 2: Very Common (11–20)

//!21 Find the second largest/smallest number in an array.
const arr21 = [23, 56, 32, 12, 45, 22, 23, 56, 32];
const findSecondLargestSmallestNumInArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  const uniqueArr = [...new Set(arr)];
  return {
    SecondSmallestNum: uniqueArr[1],
    SecondLargestNum: uniqueArr.at(-2),
  };
};
// console.log(findSecondLargestSmallestNumInArray(arr21));

const findSecondLargestSmallestNumInArraySort = (arr) => {
  let uniqueArr = [...new Set(arr.sort((a, b) => a - b))];
  return {
    SecondSmallestNum: uniqueArr[1],
    SecondLargestNum: uniqueArr.at(-2),
  };
};
// console.log(findSecondLargestSmallestNumInArraySort(arr21));

//! 22 Write a program to sort the first half of an array in ascending order and the second half in descending order.
const sortArrInAscendingDescendingOrderAtOnce = (arr) => {
  let mid = Math.floor(arr.length / 2);
  let sortedArr = arr.sort((a, b) => a - b);
  return [...sortedArr.slice(0, mid), ...sortedArr.slice(mid).reverse()];
};
const arr22 = [2, 6, 10, 4, 1, 9, 7, 3, 8, 5];
// console.log(sortArrInAscendingDescendingOrderAtOnce(arr22));

//!23 Implement array filtering (even/odd numbers)
const OddEvenFilter = (arr) => {
  let odds = arr.filter((num) => num % 2 != 0);
  let evens = arr.filter((num) => num % 2 === 0);
  return {
    EvenNums: evens,
    OddNums: odds,
  };
};
const arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(OddEvenFilter(arr23));

//!24 Flatten a nested array.
const arr24 = [1, 2, [3, 4, 5, [6, 7, [10, 20], 8], 9], 10];
const flattenArray = (arr) => arr.flat(Infinity);
// console.log(flattenArray(arr24));

const flattenNestedArray = (arr) => {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      result.push(...flattenNestedArray(el));
    } else {
      result.push(el);
    }
  }
  return result;
};
// console.log(flattenNestedArray(arr24));

//!25 Find pairs in an array whose sum equals a given number

//!26 Remove a specific element from an array
const removeSpecificElement = (arr, el) => arr.filter((item) => item != el);
const arr26 = [1, 2, 33, 3, 4, 5];
// console.log(removeSpecificElement(arr26, 33));

//!27 Insert an element at a specific index in an array.
const arr27 = [10, 20, 40, 50];
const insertElAtIndex = (arr, el, i) => {
  arr.splice(i, 0, el);
  return arr;
};
// console.log(insertElAtIndex(arr27, 30, 2));
const insertElAtIndexSlice = (arr, el, i) => [
  ...arr.slice(0, i),
  el,
  ...arr.slice(i),
];
// console.log(insertElAtIndexSlice(arr27, 30, 2));

//!28 Smallest positive missing integer in an array.
const findSmallestMissingInteger = (arr) => {
  let missingNums = [];
  let positives = arr.filter((num) => num > 0);
  let n = positives.length;
  for (let i = 0; i < n; i++) {
    let current = positives[i];
    let next = positives[i + 1];
    for (let num = current + 1; num < next; num++) missingNums.push(num);
  }
  return missingNums[0];
};
const arr28 = [20, -22, 21, 23, -34, 25, -26, -10, 27, 30];
// console.log(findSmallestMissingInteger(arr28));

//!29 Subarray with maximum sum (Kadane’s Algorithm)
const maxSumKadaneAlgo = (arr) => {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
const arr29 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSumKadaneAlgo(arr29));

//!30 Check if an object is an array.
const arr30 = ["a", "b", "c", "d"];
const checkIsArray = (arr) => Array.isArray(arr);
// console.log(checkIsArray(arr30));

//!31 Find subarrays that sum to a target value
const findSubArrays = (arr, target) => {
  let arrays = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let sub = [];
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      sub.push(arr[j]);
      if (sum === target) arrays.push([...sub]);
    }
  }
  return arrays;
};
const arr31 = [3, 3, 2, 1, 5, 9, 1, 2, 4];
// console.log(findSubArrays(arr31, 6));

//!! 🔹 Tier 3: Frequently Asked (21–30)

//!32 Find the frequency/count of elements in an array
const countFreqOfChar = (arr) => {
  let frequency = {};
  for (let el of arr) frequency[el] = (frequency[el] || 0) + 1;
  return frequency;
};
const arr32 = ["a", "z", "w", "z", "a", "V", "i", "a", "A", "v", "V"];
// console.log(countFreqOfChar(arr32));

//!33 Clone/copy an array
const arr33 = ["Vikas", "Madhur", "Shubham", "Muskan"];

const deepCopyArr = (arr) => JSON.parse(JSON.stringify(arr));
// console.log(deepCopyArr(arr33));

const copyArrSpread = (arr) => [...arr];
// console.log(copyArrSpread(arr33));

const copyArrSlice = (arr) => arr.slice(0);
// console.log(copyArrSlice(arr33));

const copyArrFrom = (arr) => Array.from(arr);
// console.log(copyArrFrom(arr33));

const copyArrConcat = (arr) => [].concat(arr);
// console.log(copyArrConcat(arr33));

//!34 Split an array into chunks/groups of n
const splitArray = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
const arr34 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// console.log(splitArray(arr34, 3));

//!35 Concatenate arrays without built-in methods.
const arr35 = ["a", "b", "c", "d"];
const arr35a = ["w", "x", "y", "z"];
const concatinateArrays = (arr1, arr2) => {
  let result = [];
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    result[index] = arr1[i];
    index++;
  }
  for (let i = 0; i < arr2.length; i++) {
    result[index] = arr2[i];
    index++;
  }
  return result;
};
// console.log(concatinateArrays(arr35, arr35a));

//!36 Check if two arrays are equal
const arr36 = ["Vikas", "Rajeev", "Shubham", "Madhur"];
const arr36a = ["Vikas", "Rajeev", "Shubham", "Madhur"];

const checkEqualsEvery = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  return arr1.every((el, i) => el === arr2[i]);
};
// console.log(checkEqualsEvery(arr36, arr36a));

const checkEquals = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  return arr1.join(" ") === arr2.join(" ");
};
// console.log(checkEquals(arr36, arr36a));

const checkEqualsJson = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
// console.log(checkEqualsJson(arr36, arr36a));

//!37 Reverse words in an array of strings
const arr37 = ["Hellow", "world", "welcome", "to", "Javascript"];
const reverseWordsInAnArray = (arr) => arr.reverse();
// console.log(reverseWordsInAnArray(arr37));
const reverseWordsInAnArr = (arr) => {
  let result = [];
  for (let el of arr) result.unshift(el);
  return result;
};
// console.log(reverseWordsInAnArr(arr37));

//!38 Convert an array to string and vice versa.
const toggleArrayString = (value) => {
  if (Array.isArray(value)) {
    return value.join("");
  } else if (typeof value === "string") {
    return value.split("");
  } else {
    return "Provide a valid input";
  }
};
const arr38 = ["h", "e", "l", "l", "o", "w"];
// console.log(toggleArrayString(arr38));
// console.log(toggleArrayString("Vikas"));
// console.log(toggleArrayString(10));

//!39 Get the last n items of an array.
const getLastNitems = (arr, n) => {
  let items = [];
  let start = arr.length - n;
  for (let i = start; i < arr.length; i++) items.push(arr[i]);
  return items;
};
const arr39 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(getLastNitems(arr39, 5));

//!40 Implement pagination on an array.

// !40 Implement pagination on an array
const paginate = (arr, pageNumber, pageSize) =>
  arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
const arr40 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(paginate(arr40, 1, 5)); // [1,2,3,4,5]  → Page 1
// console.log(paginate(arr40, 2, 5)); // [6,7,8,9,10] → Page 2
// console.log(paginate(arr40, 3, 5)); // [11,12]      → Page 3 (last, partial)

//!41 Filter out falsy values from an array.
const arr41 = [
  1,
  0,
  "vikas",
  "",
  " ",
  false,
  true,
  -1,
  null,
  [],
  {},
  undefined,
];
const filterFalsyValue = (arr) => {
  let filtered = [];
  for (let el of arr) {
    if (el) filtered.push(el);
  }
  return filtered;
};
// console.log(filterFalsyValue(arr41));

const filterFalsy = (arr) => arr.filter(Boolean);
// console.log(filterFalsy(arr41));

// 🔹 Tier 4: Sometimes Asked (31–40)

//!42 Perform binary search in a sorted array

//!43 Find common elements across multiple arrays

//!44 Find the index of a particular element in an array.
const arr44 = [2, 5, 9, 3, 71, 0, 2];
const findIndex = (arr, el) => arr.indexOf(el);
// console.log(findIndex(arr44, 3));

const findManualIndex = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (el === arr[i]) return i;
  }
  return -1;
};
// console.log(findManualIndex(arr44, 0));

//!45 Splice vs slice in arrays (with examples)
const arr45 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const sliceArray = (arr, from, to) => arr.slice(from, to + 1);
// console.log(sliceArray(arr45, 3, 7));

const spliceArray = (arr, from, deleteCount, ...els) => {
  arr.splice(from, deleteCount, ...els);
  return arr;
};
// console.log(spliceArray(arr45, 4, 2, 500, 600));

// Find all unique permutations of an array

// Implement map/reduce on an array

// Difference between array and object in JavaScript

// Debounce/throttle with arrays of event data

// Implement infinite scrolling using arrays

// Leaders in array (greater than all elements to right)
