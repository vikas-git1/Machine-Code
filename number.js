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
const findFactorialOfDigit = (digit) => {
  let factorial = 1;
  for (let i = 1; i <= digit; i++) {
    factorial *= i;
  }
  return factorial;
};
const sumOfFactorialOfDigits = (num) => {
  let sum = 0;
  let numStr = num.toString();
  for (let char of numStr) {
    let factorialOfDigit = findFactorialOfDigit(parseInt(char));
    sum += factorialOfDigit;
  }
  return sum === num
    ? `Yes, the given number ${num} is a strong number`
    : `No, the given number ${num} is not a strong number`;
};
// console.log(sumOfFactorialOfDigits(145));

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

// 21. Find the largest of three numbers.
const findLargestOfThreeNums = (num1, num2, num3) => {
  let largestNum = num1;
  if (num2 > largestNum) largestNum = num2;
  if (num3 > largestNum) largestNum = num3;
  return largestNum;
};
// console.log(findLargestOfThreeNums(200, 150, 100));

// 22. Check if two numbers are coprime (GCD is 1).
const GCD = (num1, num2) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};
const checkCoPrimeNums = (num1, num2) => {
  if (GCD(num1, num2) === 1) {
    return true;
  }
  return false;
};
// console.log(checkCoPrimeNums(14, 29));

// 23. Find the sum of all even numbers in a range.
const sumOfEvenNumsInRange = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return `The Sum of all Even Numbers in the Range from ${start} to ${end} is ${sum} `;
};
// console.log(sumOfEvenNumsInRange(10, 15));

// 24. Find the sum of all odd numbers in a range.
const findSumOfAllOddInRange = (start, end) => {
  let sum = 0;
  if (start % 2 === 0) {
    start++;
  }
  for (let i = start; i <= end; i += 2) {
    sum += i;
  }
  return `The Sum of all Odd Numbers in the Range from ${start} to ${end} is ${sum} `;
};
// console.log(findSumOfAllOddInRange(10, 15));

// 25. Check if a number is a power of two.
const isPowerOfTwo = (num) => {
  for (let i = 0; i < num; i++) {
    if (num === Math.pow(2, i)) {
      return `Yes, The number ${num} is a power of 2`;
    }
  }
  return `No, The number ${num} is not a power of 2`;
};
// console.log(isPowerOfTwo(16));

// 26. Count the number of factors of a number.
const countNumOfFactors = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return `The Total number of Factors of the given number ${num} is ${count}`;
};
// console.log(countNumOfFactors(10));

// 27. Find the product of digits of a number.
const productOfDigits = (num) => {
  let product = 1;
  let numStr = num.toString();
  for (let char of numStr) {
    let digit = parseInt(char);
    product *= digit;
  }
  return product;
};
// console.log(productOfDigits(111112));

// 28. Find the sum of squares of digits of a number.
const sumOfSquaresOfDigits = (num) => {
  let sum = 0;
  let numStr = num.toString();
  for (let char of numStr) {
    let digit = parseInt(char);
    sum += digit ** 2;
  }
  return sum;
};
// console.log(sumOfSquaresOfDigits(123));

// 29. Check if a number is an automorphic number (square ends with same digits as number).
const isAutomorphic = (num) =>
  String(num * num).endsWith(String(num))
    ? `Yes, number ${num} is automorphic number`
    : `No, number ${num} is not a automorphic number`;
//   {
//   let square = (num * num).toString();
//   let numStr = num.toString();
//   if (square.endsWith(numStr)) {
//     return `Yes, number ${num} is automorphic number`;
//   }
//   return `No, number ${num} is not a automorphic number`;
// };
// console.log(isAutomorphic(25));
// console.log(isAutomorphic(3));

// 30. Find the nth prime number.
const isPrimeNum = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const findNthPrimeNum = (num) => {
  let nthPrime;
  count = 0;
  for (let i = 2; count < num; i++) {
    if (isPrimeNum(i)) {
      nthPrime = i;
      count++;
    }
  }

  return nthPrime;
};
// console.log(findNthPrimeNum(10));

// function abc(a, b, c) {}
// function pqr(a = 1, b, c) {}
// function xyz(a, b = 0, c) {}

// function subtract(a, b) {
//   if (b !== undefined) {
//     return a - b;
//   }
//   return function (c) {
//     return a - c;
//   };
// }
// console.log(subtract(10, 5));
// console.log(subtract(10)(5));

//  
