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


