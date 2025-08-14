//! A. Very Frequently Asked (Must Know)

//1.Reverse a string.
const reverseString = (str) => str.split("").reverse().join("");
const str1 = "Vikas";
// console.log(reverseString(str1));

//2.Check if a string is a palindrome.
const isPalindrome = (str) => {
  let newStr = str.split("").reverse().join("");
  return str === newStr
    ? `Yes, ${str} is Palindrome`
    : `No, ${str} is not Palindrome`;
};
const str2 = "madam";
// console.log(isPalindrome(str2));

//3.Count vowels and consonants in a string.
function countViwelsConsonants(str) {
  let targetStr = str.toLowerCase().trim();
  let vowelsCount = 0;
  let consonantsCount = 0;
  let spaceCount = 0;
  let vowels = "aeiou";
  for (let char of targetStr) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else if (char >= "a" && char <= "z") {
      consonantsCount++;
    } else if (char === " ") {
      spaceCount++;
    }
  }
  return {
    Vowels: vowelsCount,
    Consonants: consonantsCount,
    Spaces: spaceCount++,
  };
}
const str3 = "Rama khe d i";
// console.log(countViwelsConsonants(str3));

//4.Count the occurrence of each character in a string.
const countOccurrenceOfChar = function (str) {
  let freq = {};
  let targetStr = str.toLowerCase().replace(/\s+/g, "");
  for (let el of targetStr) {
    freq[el] = (freq[el] || 0) + 1;
  }
  return freq;
};
const str4 = "Information Technology";
// console.log(countOccurrenceOfChar(str4));

//5.Remove duplicate characters from a string.
const removeDuplicates = (str) => {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
};
const str5 = "ViikkkaVski";
// console.log(removeDuplicates(str5));

//6.Find the first non-repeating character in a string.
const findNonRepeatingChars = (str) => {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return "There are no non-repeating characters in this string";
};
const str6 = "azibdklablzidk";
// console.log(findNonRepeatingChars(str6));

// const findNonRepeatingChars = (str) => {
//   let freq = {};
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   return Object.keys(freq)
//     .filter((char) => freq[char] === 1)
//     .join("");
// };

//7.Check if two strings are anagrams.
const checkAnagrams = (str1, str2) => {
  let str1Sort = str1.toLowerCase().split("").sort().join("");
  let str2Sort = str2.toLowerCase().split("").sort().join("");
  return str1Sort === str2Sort;
};
let str7a = "Vikas";
let str7b = "skiav";
// console.log(checkAnagrams(str7a, str7b));

//8.Change the case of each character (uppercase ↔ lowercase).
const changeCaseOfChar = (str) => {
  let result = "";
  for (let char of str) {
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
};
const str8 = "prAksah";
// console.log(changeCaseOfChar(str8));

//9.Find the longest word in a sentence.
const findLongestWord = (str) => {
  let strArr = str.split(" ");
  let result = strArr[0];
  for (let word of strArr) {
    if (result.length < word.length) {
      result = word;
    }
  }
  return result;
};
const str9 = "Hi, I am a Web Developer";
// console.log(findLongestWord(str9));

//10.Check if a string contains only digits.
const checkStrContainsDigit = (str) => {
  for (let char of str) {
    if ("0" >= char || "9" <= char) {
      return false;
    }
  }
  return true;
};
const str10 = "725";
// console.log(checkStrContainsDigit(str10));

//! B. Frequently Asked (Common in Rounds 1 & 2)

//11. Count the number of words in a string.
const countWordsInStr = (str) => str.split(" ").length;
const str11 = "Hellow Guyz, How are You?";
// console.log(countWordsInStr(str11));

//     Reverse the words in a sentence.
const reverseWordsInStr = (str) => str.split(" ").reverse().join(" ");
const str12 = "India MP Sehore Ramakhedi";
// console.log(reverseWordsInStr(str12));

//13.Check if a string contains a substring.
const checkStrContainsSubstring = (str, subStr) => str.includes(subStr);
const str13a = "Computer";
const str13b = "put";
// console.log(checkStrContainsSubstring(str13a, str13b));

//14.Replace all spaces in a string with - (or %20).
const replaceSpaceInStr = (str) => str.split(" ").join("%20");
const str14 = "vikas singh mewara";
// console.log(replaceSpaceInStr(str14));

const replaceSpaceInStr2 = (str) => str.replace(/ /g, "-");
// console.log(replaceSpaceInStr2(str14));

//15.Find the frequency of a given character in a string.
const findFrequencyOfChars = (str) => {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
};
const str15 = "Cooler";
// console.log(findFrequencyOfChars(str15));

//16.Check if two strings are rotations of each other.
const checkIfStrAreRotation = (str1, str2) => {
  if (str1.length != str2.length) return false;
  return (str1 + str1).includes(str2);
};
const str16a = "vikas";
const str16b = "asvik";
// console.log(checkIfStrAreRotation(str16a, str16b));

//17.Remove all white spaces from a string.
const removeWhiteSpaces = (str) => str.replace(/\s+/g, "");
const str17 = "   I am Looking    forward     ";
// console.log(removeWhiteSpaces(str17));

//18.Capitalize the first letter of each word in a sentence.
const capitalizeFirstLetterOfWord = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const str18 = "capitalize the first letter of each word";
// console.log(capitalizeFirstLetterOfWord(str18));

//19.Find the largest and smallest word in a string.
const findLargestAndSmallestWord = (str) => {
  let strArr = str.trim().split(/\s+/);
  let largestWord = strArr[0];
  let smallestWord = strArr[0];
  for (let word of strArr) {
    if (largestWord.length < word.length) {
      largestWord = word;
    }
    if (smallestWord.length > word.length) {
      smallestWord = word;
    }
  }
  return {
    SmallestWord: smallestWord,
    LargestWord: largestWord,
  };
};
const str19 = "Find The  Largest and Smallest word from string";
// console.log(findLargestAndSmallestWord(str19));

//20.Count uppercase, lowercase, digits, and special characters.
const countCases = (str) => {
  let uppercaseCount = 0,
    lowercaseCount = 0,
    digitsCount = 0,
    specialCharCount = 0;

  for (let char of str) {
    if (char >= "A" && char <= "Z") {
      uppercaseCount++;
    } else if (char >= "a" && char <= "z") {
      lowercaseCount++;
    } else if (char >= "0" && char <= "9") {
      digitsCount++;
    } else {
      specialCharCount++;
    }
  }
  return {
    UpperCase: uppercaseCount,
    LowerCase: lowercaseCount,
    Digits: digitsCount,
    SpecialCharacter: specialCharCount,
  };
};
const str20 = "CountCases- 20";
// console.log(countCases(str20));

// C. Moderately Common (Asked in Logical Rounds)

//21.Check if a string is a pangram (contains all letters of the alphabet).
const isPanagram = (str) => {
  let result = new Set();
  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      result.add(char);
    }
  }
  return result.size === 26;
};
const str21 =
  "The quick brown fox jumps over the lazy dog  14567890-!@#$%^&*()_";
// console.log(isPanagram(str21));

//22.Count the number of special characters in a string.
const countSpecialChars = (str) => {
  let specialCharCount = 0;
  for (let char of str.toLowerCase()) {
    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "0" && char <= "9") &&
      char != " "
    ) {
      specialCharCount++;
    }
  }
  return { Count: specialCharCount };
};
let str22 = "he12ll@ow8 wo#r$l";
// console.log(countSpecialChars(str22));

//23.Find the ASCII value of each character in a string.
const asciiValueOfChar = (str) => {
  let values = {};
  for (let char of str) {
    values[char] = char.charCodeAt(0);
  }
  return values;
};
const str23 = "Vikas";
// console.log(asciiValueOfChar(str23));

//24.Find the most frequent character in a string.
const findMostFrequentChar = (str) => {
  let freq = {};
  for (let char of str) {
    if (char === " ") continue;
    freq[char] = (freq[char] || 0) + 1;
  }
  let mostFreqNum = Math.max(...Object.values(freq));
  let mostFreqChar = Object.keys(freq).filter(
    (char) => freq[char] === mostFreqNum
  );

  return { Characters: mostFreqChar, Frequency: mostFreqNum };
};
const str24 = "Hellow world ";
// console.log(findMostFrequentChar(str24));

//25.Remove characters from the first string which are present in the second string.
const removeCharsFromStr = (str1, str2) => {
  let result = "";
  for (let char of str1) {
    if (!str2.includes(char)) {
      result += char;
    }
  }
  return result;
};
const str25a = "vgioaklsu";
const str25b = "vikas";
// console.log(removeCharsFromStr(str25a, str25b));

//26.Check if a string is made of repeated substrings (e.g., "abab").

//27.Find the index of the first occurrence of a substring.

//28.Count the frequency of each word in a sentence.
const countWordsFreq = (str) => {
  let freq = {};
  let strArr = str.toLowerCase().split(/\s+/);
  for (let word of strArr) {
    freq[word] = (freq[word] || 0) + 1;
  }
  return freq;
};
const str28 =
  "Count the Frequency of the each       word and print the final frequency count";
// console.log(countWordsFreq(str28));

//29.Remove all occurrences of a given character from a string.

//30.Convert a string to a number (without parseInt / Number).
const convertStrToNum = (str) => {
  let num = 0;
  for (let char of str) {
    let digit = char.charCodeAt(0) - "0".charCodeAt(0);
    num = num * 10 + digit;
  }
  return num;
};
const str30 = "1234567";
// console.log(convertStrToNum(str30));

// D. Less Common but Good to Know

//     Find all permutations of a string.

//     Find all subsequences of a string.

//     Implement String.prototype.split() without using split().

//     Implement String.prototype.replaceAll() without using it.

//     Find the longest common prefix among an array of strings.

//     Implement your own version of indexOf.

//     Find the longest palindromic substring.

//     Find the second most frequent character in a string.

//     Check if a string can be rearranged to form a palindrome.

//     Encode and decode a string using run-length encoding.

// E. Advanced / Rare but Possible

//     Implement string compression (e.g., "aaabb" → "a3b2").

//     Group anagrams from an array of strings.

//     Find the smallest window in a string containing all characters of another string.

//     Find all starting indices of anagrams of a pattern in a string.

//     Check if a string is a valid palindrome ignoring non-alphanumeric characters.

//     Check if a string is a subsequence of another string.

//     Find the edit distance (Levenshtein distance) between two strings.

//     Implement your own version of startsWith and endsWith.

//     Find the minimum number of flips to make a binary string alternate.

//     Rotate characters of a string (left or right rotation).

//! 14.Count common sub-sequence in two strings.
//! 18.Print all the duplicates in the input string.
const printDuplicates = (str) => {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return Object.keys(freq)
    .filter((char) => freq[char] > 1)
    .join("");
};
let str = "viiikasass";
// console.log(printDuplicates(str));

// Reverse a string without using built-in reverse().
const reverseStr2 = (str) => {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
let strrr = "hellow";
console.log(reverseStr2(strrr));

const findSecondLargestNum = (arr) => {
  let uniqueArr = [...new Set(arr)];
  let sortedArr = uniqueArr.sort((a, b) => a - b);
  return sortedArr[1];
};
let arr = [9, 27, 90, 25, 17];
console.log(findSecondLargestNum(arr));

const isPalindromeStr = (str) => {
  let reversdStr = str.split("").reverse().join("");
  return str === reversdStr;
};
let strr = "madam";
console.log(isPalindromeStr(strr));
