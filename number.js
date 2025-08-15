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
// console.log(findFactorial(5));

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
// console.log(isArmstrong(153));

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
// console.log(findGCD(15, 30));

const findHCF = (num1, num2) => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return `The GCD of two numbers is ${num1}`;
};
// console.log(findHCF(20, 10));

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
// console.log(reverseDigitsOfNum(123456789));

//8. Count the number of digits in a number
const countDigits = (num) => num.toString().length;
// console.log(countDigits(12345678));

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
// console.log(sumOfDigits(12903));

//10. Check if a number is even or odd.
const ifNumIsOddEven = (num) =>
  num % 2 === 0 ? `The number ${num} is Even` : `The number ${num} is Odd`;
// console.log(ifNumIsOddEven(123));

//11. Fibonacci series up to N terms
const printFibonacciSeries = (n) => {
  let series = [];
  if (n < 1) return series;
  if (n >= 1) series.push(0);
  if (n >= 2) series.push(1);

  for (let i = 2; i < n; i++) {
    let nextTerm = series[i - 1] + series[i - 2];
    series.push(nextTerm);
  }
  return series;
};
// console.log(printFibonacciSeries(-1));
// console.log(printFibonacciSeries(1));
// console.log(printFibonacciSeries(6));

//12. Check if a number is perfect
const isPerfectNum = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num
    ? `The number ${num} is a perfect num`
    : `The number ${num} is not a perfect num`;
};
// console.log(isPerfectNum(28));
// console.log(isPerfectNum(29));

//13. Check if a number is strong (sum of factorial of digits = number)

//14. Check if a number is Harshad (Niven number)
const isHarshadNum = (num) => {
  let sum = 0;
  let numStr = num.toString();
  for (let char of numStr) {
    let digit = parseInt(char);
    sum += digit;
  }
  return num % sum === 0
    ? `The Given Number ${num} is Harshad number`
    : `The Given Number ${num} is not harshad number`;
};
// console.log(isHarshadNum(18));

//15. Convert decimal to binary
const convertDecimalToBinary = (num) => {
  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
};
// console.log(convertDecimalToBinary(10));

//16. Convert binary to decimal
const convertBinaryToDecimal = (binary) => {
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    decimal += parseInt(binary[i]) * Math.pow(2, power);
    power++;
  }
  return decimal;
};
// console.log(convertBinaryToDecimal("1010"));

//17. Find the power of a number (without using built-in)
const powerOfNum = (num, pow) => {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result *= num;
  }
  return result;
};
// console.log(powerOfNum(10, 3));

//18. Find all prime numbers in a range.
const checkPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const findPrimesInRange = (start, end) => {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (checkPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};
// console.log(findPrimesInRange(7, 37));

//19. Find all Armstrong numbers in a range
const checkArmstrong = (num) => {
  let numStr = num.toString();
  let sum = 0;
  let power = numStr.length;
  for (let char of numStr) {
    let digit = Math.pow(parseInt(char), power);
    sum += digit;
  }
  return sum === num;
};
const findArmstrongNumsInRange = (start, end) => {
  let armstrongNumSeries = [];
  for (let i = start; i <= end; i++) {
    if (checkArmstrong(i)) {
      armstrongNumSeries.push(i);
    }
  }
  return armstrongNumSeries;
};
// console.log(findArmstrongNumsInRange(1000, 3000));

//20. Find sum of first N natural numbers
const sumOfFirstNaturalNumbers = (N) => {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumOfFirstNaturalNumbers(5));
