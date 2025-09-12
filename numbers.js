// 🔥 Must Prepare (Absolutely Core)

//!1 Check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};
// console.log(isPrime(23));

//!2 Find the factorial of a number
const findFactorial = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) factorial *= i;
  return `The factorial of ${num} is ${factorial}`;
};
// console.log(findFactorial(10));

//!3 Check if a number is palindrome
const isNumPalindrome = (num) => {
  let numStr = num.toString();
  let reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr;
};
// console.log(isNumPalindrome(2344321));

const isPalindromeNum = (num) => {
  let original = num;
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return original === reverse;
};
// console.log(isPalindromeNum(345443));

//!4 Reverse a number
const reverseNum = (num) => Number(num.toString().split("").reverse().join(""));
const reversedNumber = (num) =>
  parseInt(num.toString().split("").reverse().join(""));

const reverseNumber = (num) => {
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reverse;
};
// console.log(reverseNumber(12345));

//!5 Print Fibonacci series
const printFibonacciSeries = (num) => {
  let series = [];

  if (num >= 1) series.push(0);
  if (num >= 2) series.push(1);
  for (let i = 2; i < num; i++) {
    let nextTerm = series[i - 1] + series[i - 2];
    series.push(nextTerm);
  }
  return series;
};
// console.log(printFibonacciSeries(5));

//!6 Print  Nth Fibonacci
const nthFibonacci = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  let nthFib = 1;
  let a = 0,
    b = 1;
  for (let i = 3; i <= n; i++) {
    nthFib = a + b;
    a = b;
    b = nthFib;
  }
  return nthFib;
};

// console.log(nthFibonacci(5));

//!7 Check if a number is Armstrong.
const isArmstrong = (num) => {
  let sum = 0;
  let numStr = num.toString();
  let power = numStr.length;
  for (let int of numStr) {
    let digit = Math.pow(Number(int), power);
    sum += digit;
  }
  return sum === num
    ? `Number ${num} is Armstrong Number`
    : `Number ${num} is Not Armstrong Number`;
};
// console.log(isArmstrong(153));

//!8 Find GCD of two numbers
const findHCF = (num1, num2) => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};
// console.log(findHCF(11, 22));

const findGCD = (num1, num2) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return `The GCD of two numbers ${num1} and ${num2} is ${gcd}`;
};
// console.log(findGCD(24, 36));

//!9 Find LCM of two numbers.

const findLCM = (num1, num2) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  let lcm = (num1 * num2) / gcd;
  return `The LCM of two numbers ${num1} and ${num2} is ${lcm}`;
};
// console.log(findLCM(90, 25));

//!10 Find sum of digits of a number
const sumOfDigits = (num) => {
  let sum = 0;
  while (num !== 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
};
// console.log(sumOfDigits(123));

const sumOfDigitsInNum = (num) => {
  let sum = 0;
  let numStr = num.toString();
  for (let char of numStr) sum += Number(char);
  return sum;
};
// console.log(sumOfDigitsInNum(567));

// ✅ Frequently Asked (High-Value Practice)

//!11 Count the digits in a number
const countDigits = (num) => {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return `Total digits in the given number ${num} are: ${count}`;
};
// console.log(countDigits(1234567890));

const countDigitsOfNum = (num) => num.toString().length;
// console.log(countDigitsOfNum(4567));

//!12 Check if a number is perfect
const isPerfectNum = (num) => {
  if (num < 1) return false;
  let sum = 0;
  for (let i = 1; i < num; i++) if (num % i === 0) sum += i;
  return sum === num
    ? `The number ${num} is a perfect num`
    : `The number ${num} is not a perfect num`;
};
// console.log(isPerfectNum(28));

//!13 Check if a number is even/odd
const checkOddEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
// console.log(checkOddEven(12));

// ❖ Calculate power (x^y) using loops/recursion
//!15 Generate all prime numbers in a range
const isPrimeNum = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return true;
};
const printPrimes = (start, end) => {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrimeNum(i)) primes.push(i);
  }
  return primes;
};
// console.log(printPrimes(10, 80));

//!16 Check if a number is strong (sum of factorial of digits)
const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) fact *= i;
  return fact;
};

const isStrongNum = (num) => {
  let sum = 0;
  let givenNum = num;
  while (num > 0) {
    let digit = num % 10;
    sum += factorial(digit);
    num = Math.floor(num / 10);
  }
  return sum === givenNum
    ? `Yes, the given number ${num} is a strong number`
    : `No, the given number ${num} is not a strong number`;
};
// console.log(isStrongNum(145));

const isStrongNumber = (num) => {
  let sum = 0;
  let numStr = num.toString();
  for (let el of numStr) sum += factorial(Number(el));
  return sum === num
    ? `Yes, the given number ${num} is a strong number`
    : `No, the given number ${num} is not a strong number`;
};
// console.log(isStrongNum(145));

//!17 Swap two numbers without using a third variable
const swapTwoNumbers = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return { a: a, b: b };
};
// console.log(swapTwoNumbers(5, 10));

// 📖 Good-to-Know (If You Have Time)

//!18 Count trailing zeros in factorial
//!19 Convert decimal ↔ binary/oct/hex
//!20 Print all divisors of a number
const divisors = (num) => {
  let divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) if (num % i === 0) divisors.push(i);
  return divisors;
};
// console.log(divisors(100));

//!21 Check if a number is a perfect square
const isPerfectSquare = (num) => {
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (i * i === num) return `Yes, number ${num} is a perfect square of ${i}`;
  }
  return `No, number ${num} is not a perfect square of any number}`;
};
// console.log(isPerfectSquare(25));

const isPerfectSq = (num) => {
  let sqrt = Math.sqrt(num);
  if (Number.isInteger(sqrt)) {
    return `Yes, number ${num} is a perfect square`;
  }
  return `No, number ${num} is not a perfect square of any number}`;
};
// console.log(isPerfectSq(25));

//!22 Print all Armstrong numbers in a range.
const printArmstrongNumsInRange = (start, end) => {
  const isArmstrongNum = (num) => {
    let sum = 0;
    let original = num;
    let power = num.toString().length;
    while (num > 0) {
      let digit = num % 10;
      sum += Math.pow(digit, power);
      num = Math.floor(num / 10);
    }
    return sum === original;
  };
  let armstrongNums = [];
  for (let i = start; i <= end; i++) {
    if (isArmstrongNum(i)) armstrongNums.push(i);
  }
  return armstrongNums;
};
// console.log(printArmstrongNumsInRange(10, 2000));

//!23 Perform prime factorization

// 🔥 Must Prepare (Absolutely Core)
// Check if a number is prime
// ❖ Find the factorial of a number
// ❖ Check if a number is palindrome
// ❖ Reverse a number
// ❖ Print Fibonacci series / Nth Fibonacci
// ❖ Check if a number is Armstrong
// ❖ Find GCD & LCM of two numbers
// ❖ Find sum of digits of a number

// ✅ Frequently Asked (High-Value Practice)

// ❖ Count the digits in a number
// ❖ Check if a number is perfect
// ❖ Check if a number is even/odd
// ❖ Calculate power (x^y) using loops/recursion
// ❖ Generate all prime numbers in a range
// ❖ Check if a number is strong (sum of factorial of digits)
// ❖ Swap two numbers without using a third variable

// 📖 Good-to-Know (If You Have Time)

// ❖ Count trailing zeros in factorial
// ❖ Convert decimal ↔ binary/oct/hex
// ❖ Print all divisors of a number
// ❖ Check if a number is a perfect square
// ❖ Print all Armstrong numbers in a range
// ❖ Perform prime factorization
// ❖ Check if a number is a happy number
