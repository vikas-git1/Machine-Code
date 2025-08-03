//! Basics & Core Operations

// 1.Find the smallest number in an array
const findSmallestNum = (arr) => {
  let smallestNum = arr[0];
  for (let num of arr) {
    if (smallestNum > num) {
      smallestNum = num;
    }
  }
  return `The smallest number in the given array is: ${smallestNum}`;
};
const arr1 = [24, 78, 9, 27, 10, 266];
//console.log(findSmallestNum(arr1));

// 2.Find the largest number in an array
const findLargestNum = (arr) => {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (largestNum < arr[i]) {
      largestNum = arr[i];
    }
  }
  return `The Largest number in the given array is: ${largestNum}`;
};
const arr2 = [214, 781, 9, 527, 10, 266, 999, -1893, 89];
// console.log(findLargestNum(arr2));

// 3.Find second smallest and second largest.
const findSecondSmallestNum = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  return `The second smallest number in array is: ${sortedArr[1]}`;
};
const arr3 = [21, 781, 90, 527, 100, 266, 999, -1893, 89];
//console.log(findSecondSmallestNum(arr3));

// 4.Reverse a given array.
const reverseArray = (arr) => {
  let reversdArr = [];
  for (let el of arr) {
    reversdArr.unshift(el);
  }
  return reversdArr;
};
const arr4 = [420, "Mewara", "Singh", "Vikas"];
//console.log(reverseArray(arr4))

// 5.Calculate sum of array elements.
const calculateSumOfEls = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const arr5 = [21, 781, 90, 527, 100, 266, 999, -1893, 89, 2000];
//console.log(calculateSumOfEls(arr5));

// 6.Find the average of array elements.
const findAverageOfEls = (arr) => {
  let sum = 0;
  let length = arr.length;
  for (let num of arr) {
    sum += num;
  }
  let average = sum / length;
  return ` The average of the elements of the given array is: ${average}`;
};
const arr6 = [10, 2, 6, 12, 15];
//console.log(findAverageOfEls(arr6));

// 7.Rotate array by K elements (left/right)
const rotateArrToRightByK = (arr, K) => {
  for (let i = 0; i < K; i++) {
    let removedEl = arr.shift();
    arr.push(removedEl);
  }
  return arr;
};
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(rotateArrToRightByK(arr7, 3));

const rotateArrToLeftByK = (arr, K) => {
  for (let i = 0; i < K; i++) {
    const removedEl = arr.pop();
    arr.unshift(removedEl);
  }
  return arr;
};
//console.log(rotateArrToLeftByK(arr7, 2));

// 8.Find the median of an array
const medianOfArr = (arr) => {
  let median;
  let sortedArr = [...arr].sort((a, b) => a - b);
  let mid = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 === 0) {
    median = (sortedArr[mid] + sortedArr[mid - 1]) / 2;
  } else {
    median = sortedArr[mid];
  }
  return `The median of the given array is: ${median}`;
};
const arr8 = [242, 189, 90, 10, 263, 24, 68, 11];
// console.log(medianOfArr(arr8));

// 9.Add elements at beginning/end/specific position
const addElsAtPostion = (arr, position, el) => {
  let finalArr = [...arr];
  if (position === "start") {
    finalArr.unshift(el);
  } else if (position === "end") {
    finalArr.push(el);
  } else if (
    typeof position === "number" &&
    position >= 0 &&
    position <= finalArr.length
  ) {
    finalArr.splice(position, 0, el);
  }
  return finalArr;
};
const arr9 = ["Madhur", "Shubham", "Vikas"];
console.log(addElsAtPostion(arr9, 2, "Rajeev"));

// 10.Search for an element in the array
const searchElInArr = (arr, el) => {
  let found = arr.find((element) => element === el);
  return found
    ? `The ${el} is present in the given Array`
    : `The ${el} is not found in the given Array`;
};
const arr10 = ["apple", "banana", "orange", "guava", "cherry"];
console.log(searchElInArr(arr10, "banana"));
