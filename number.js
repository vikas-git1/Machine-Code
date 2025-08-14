//1. Check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return `Number ${num} is not a Prime Number `;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `Number ${num} is not a Prime Number `;
    }
  }
  return `Number ${num} is a Prime Number`;
};
// console.log(isPrime(16));
// console.log(isPrime(3));

//2. Find factorial of a number
const findFactorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return `The factorial of ${num} is : ${fact}`;
};
console.log(findFactorial(5));

//3. Check if a number is palindrome
const isNumPalindrome = (num) => {
  let numStr = num.toString();
  let reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr
    ? `Number ${num} is a Palindrome Number`
    : `Number ${num} is not a Palindrome Number`;
};
// console.log(isNumPalindrome(151));
// console.log(isNumPalindrome(1515));

//4. Check if a number is Armstrong.
const isArmstrong = function (num) {
  let sum = 0;
  let numStr = num.toString();
  let power = numStr.length;
  for (let char of numStr) {
    let digit = Math.pow(parseInt(char), power);
    sum += digit;
  }
  return sum === num
    ? `Number ${num} is Armstrong Number`
    : `Number ${num} is Not Armstrong Number`;
};
console.log(isArmstrong(153));

//5. Find the GCD (HCF) of two numbers
const findGCD = (num1, num2) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return `The GCD of two numbers ${num1} and ${num2} is ${gcd}`;
};
console.log(findGCD(15, 30));

const findHCF = (num1, num2) => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return `The GCD of two numbers is ${num1}`;
};
console.log(findHCF(20, 10));

//6. Find the LCM of two numbers
const findLCM = (num1, num2) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  let lcm = (num1 * num2) / gcd;
  return `The LCM of two given numbers ${num1} and ${num2} is ${lcm}`;
};
// console.log(findLCM(12, 18));

//7. Reverse digits of a number.
const reverseDigitsOfNum = (num) =>
  parseInt(num.toString().split("").reverse().join(""));
console.log(reverseDigitsOfNum(123456789));

//8. Count the number of digits in a number
const countDigits = (num) => num.toString().length;
console.log(countDigits(12345678));

//9. Sum of digits of a number.
const sumOfDigits = (num) => {
  let sum = 0;
  let numStr = num.toString();
  for (let char of numStr) {
    let digit = parseInt(char);
    sum += digit;
  }
  return `The sum of digits of number ${num} is ${sum}`;
};
console.log(sumOfDigits(12903));

//10. Check if a number is even or odd.
const ifNumIsOddEven = (num) =>
  num % 2 === 0 ? `The number ${num} is Even` : `The number ${num} is Odd`;
console.log(ifNumIsOddEven(123));

// Fibonacci series up to N terms

// Check if a number is perfect

// Check if a number is strong (sum of factorial of digits = number)

// Check if a number is Harshad (Niven number)

// Convert decimal to binary

// Convert binary to decimal

// Find the power of a number (without using built-in)

// Find all prime numbers in a range

// Find all Armstrong numbers in a range

// Find sum of first N natural numbers
