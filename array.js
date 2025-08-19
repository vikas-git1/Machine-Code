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
const findSecondSmallestAndLargestNum = (arr) => {
  let sortedArr = [...new Set(arr)].sort((a, b) => a - b);
  return {
    SecondLargestNum: sortedArr.at(-2),
    SeconcSmallestNum: sortedArr[1],
  };
};
const arr3 = [2, 21, 781, 90, 527, 100, 266, 999, 2, 89];
// console.log(findSecondSmallestAndLargestNum(arr3));

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
// console.log(addElsAtPostion(arr9, 2, "Rajeev"));

// 10.Search for an element in the array
const searchElInArr = (arr, el) =>
  arr.includes(el)
    ? `The ${el} is present in the given Array`
    : `The ${el} is not found in the given Array`;

const arr10 = ["apple", "banana", "orange", "guava", "cherry"];
// console.log(searchElInArr(arr10, "orange"));

// 11.Count frequency of each element
const countFrequencyOfEls = (arr) => {
  let frequency = {};
  for (let el of arr) {
    frequency[el] = (frequency[el] || 0) + 1;
  }
  return frequency;
};
const arr11 = [12, 25, 78, 23, 12, 25, 25, 250, 78, 25];
// console.log(countFrequencyOfEls(arr11));

// 12.Remove duplicates from a sorted array.
const removeDuplicates = (arr) => {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let uniqueArr = [];
  for (let el of sortedArr) {
    if (!uniqueArr.includes(el)) {
      uniqueArr.push(el);
    }
  }
  return uniqueArr;
};
const arr12 = [12, 25, 78, 23, 12, 25, 25, 250, 78, 25];
// console.log(removeDuplicates(arr12));


// 14.Find all repeating elements
const findRepeatingEls = (arr) => {
  let result = [];
  let freq = {};
  for (let el of arr) {
    freq[el] = (freq[el] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] > 1) {
      result.push(Number(key));
    }
  }
  return result;
};
const arr14 = [12, 100, 23, 89, 18, 18, 23, 78, 100];
// console.log(findRepeatingEls(arr14));

// 15.Find all non-repeating elements
const findNonRepeatingEls = (arr) => {
  let result = [];
  let freq = {};
  for (let el of arr) {
    freq[el] = (freq[el] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] === 1) {
      result.push(Number(key));
    }
  }
  return result;
};
const arr15 = [12, 100, 23, 89, 18, 18, 23, 78, 100];
// console.log(findNonRepeatingEls(arr15));



//18.Rearrange array in increasing-decreasing order
const rearrangeInIncDecOrder = (arr) => {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let mid = Math.floor(sortedArr.length / 2);
  let firstHalf = sortedArr.slice(0, mid);
  let secondHalf = sortedArr.slice(mid).reverse();
  return [...firstHalf, ...secondHalf];
};
const arr18 = [2, 8, 5, 7, 1, 9, 3, 6, 4];
// console.log(rearrangeInIncDecOrder(arr18));



//20.Check if an array is a subset of another
const checkSubsetOfArr = (arr1, arr2) => {
  for (let el of arr2) {
    if (!arr1.includes(el)) {
      return false;
    }
  }
  return true;
};
const arr20A = [10, 70, 90, 10, 11, 20, 50, 100, 20];
const arr20B = [50, 100, 21];
// console.log(checkSubsetOfArr(arr20A, arr20B));

//22.Equilibrium index in an array
const findEquilibriumIndex = (arr) => {
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
  }
  return -1;
};
const arr22 = [2, 10, 22, 6, 3, 7, 100, 30, 20];
// console.log(findEquilibriumIndex(arr22));

//23.Circular rotation of array by K
const circularRotationByK = (arr, K) => {
  K = K % arr.length;
  for (let i = 0; i < K; i++) {
    let removedEl = arr.pop();
    arr.unshift(removedEl);
  }
  return arr;
};
const arr23 = [2, 10, 22, 6, 3, 7, 100, 30, 20];
// console.log(circularRotationByK(arr23, 8));

// ❖ Move all zeroes to the end (without changing order) – Simple but tricky.
const moveZeroesToEnd = (arr) => {
  for (let el of arr) {
    if (el === 0) {
      arr.push(el);
    }
  }
  return arr;
};
const arr24 = [10, 0, 23, 9, 0, 212, 82, 0, 74];
console.log(moveZeroesToEnd(arr24));



//19.Replace each element by its rank
const replaceElsByRank = (arr) => {
  let sortedArr = [...new Set(arr)].sort((a, b) => a - b);
  let rank = {};
  sortedArr.forEach((num, index) => {
    rank[num] = index + 1;
  });
  return arr.map((num) => rank[num]);
};
const arr19 = [10, 70, 90, 10, 20, 50, 100, 20];
// console.log(replaceElsByRank(arr19));


// 13.Check if Array is Sorted
function checkSorted(arr) {
  let asc = true,
    desc = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) asc = false;
    if (arr[i] < arr[i + 1]) desc = false;
  }

  if (asc) return "Array is sorted in ascending order";
  if (desc) return "Array is sorted in descending order";
  return "Array is not sorted";
}
const arr13 = [12, 18, 23, 78, 100];
// console.log(checkSorted(arr13));

// 16.Sort array by frequency
const sortArrayByFreq = (arr) => {};
const arr16 = [12, 100, 23, 89, 18, 18, 23, 78, 100, 8];
// console.log(sortArrayByFreq(arr16));

//17.Sort an array without built-in methods
const sortArrWithoutBuiltIn = (arr) => {
};
const arr17 = [67, 34, 87, 10, 8, 765, 100];
// console.log(sortArrWithoutBuiltIn(arr17));

// ❖ Kadane’s Algorithm (Max subarray sum) – Must-know.
// ❖ Find the missing number from 1 to N – Asked in Aptitude + Coding rounds.
// ❖ Find union and intersection of 2 arrays – Common in set-based problems.
// ❖ Check if two arrays are equal – Logical implementation-focused.
// ❖ Find peak element – Very common in binary search-based rounds.
// ❖ Count pairs with given sum – Hashmap based, frequently asked.
// ❖ Sort an array without using built-in sort
// ❖ Check if an array is sorted
// ❖ Implement debounce/throttle function (sometimes asked in advanced)
// ❖ Flatten a nested array
