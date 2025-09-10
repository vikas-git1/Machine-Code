//! 🔥 Must Prepare (Most Asked for Freshers)

//!1 Palindrome Check
const checkPalindrome = (str) => str === str.split("").reverse().join("");
// console.log(checkPalindrome("boyob"));

const checkPalindromeStr = (str) => {
  let lowerStr = str.toLowerCase();
  let reversdStr = lowerStr.split("").reverse().join("");
  return lowerStr === reversdStr
    ? `The given String ${str} is Palindrome`
    : `The given String ${str} is not Palindrome`;
};
// console.log(checkPalindromeStr("abcBa"));

//!2 Reverse a String
const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("abcde"));

const reverseStr = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
// console.log(reverseStr("xyz"));

//!3 Reverse words in a string.
const reverseWordsInStr = (str) => str.split(" ").reverse().join(" ");
// console.log(reverseWordsInStr("Reverse the words"));

const reverseWordsCharsInStr = (str) => {
  let strArr = str.split(" ");
  let reversedWords = strArr
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  return reversedWords;
};
// console.log(reverseWordsCharsInStr("This is Vikas"));

//!4 Check if two strings are Anagrams
const areAnagramsStr = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let str1Sort = str1.toLowerCase().split("").sort().join("");
  let str2Sort = str2.toLowerCase().split("").sort().join("");
  return str1Sort === str2Sort;
};
// console.log(areAnagramsStr("abcDef", "deBacF"));

//!5 Check for Rotation of strings
const checkIsRotationOfStr = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let concatStr = str1 + str1;
  if (concatStr.includes(str2)) return true;
  return false;
};
// console.log(checkIsRotationOfStr("abcd", "cdab"));

//!6 First Non-Repeating Character
const firstNonRepeatingChar = (str) => {
  let freq = {};
  for (let char of str) freq[char] = (freq[char] || 0) + 1;
  for (let char of str) if (freq[char] === 1) return char;
  return null;
};
// console.log(firstNonRepeatingChar("aabbceddses"));

//!7 Longest Common Prefix.
const longestPrefix = (arr) => {};
const arr7 = ["dog", "dooom", "donkey"];
// console.log(longestPrefix(arr7));

//!8 Count vowels and consonants
const countVowelsConsonantsSpaces = (str) => {
  let string = str.toLowerCase().trim();
  let vowels = "aeiou";
  let vowelsCount = 0,
    consonantsCount = 0,
    spaceCount = 0;
  for (let char of string) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else if ("a" <= char && char <= "z") {
      consonantsCount++;
    } else if (char === " ") {
      spaceCount++;
    }
  }
  return {
    Vowels: vowelsCount,
    Consonants: consonantsCount,
    Spaces: spaceCount,
  };
};
// console.log(countVowelsConsonantsSpaces("  This is my life      "));

//!9 Remove duplicates from a string
const removeDuplicatesStr = (str) => {
  let uniqueStr = "";
  for (let char of str) if (!uniqueStr.includes(char)) uniqueStr += char;
  return uniqueStr;
};
// console.log(removeDuplicatesStr("viiiiivkavskv"));

//!10 Frequency count of characters
const frequencyOfChars = (str) => {
  let freq = {};
  for (let char of str) freq[char] = (freq[char] || 0) + 1;
  return freq;
};
// console.log(frequencyOfChars("ramakhedi"));

// ✅ Medium Level (Often Asked in Service-Based Interviews)

//!11 Implement Atoi (string → integer)

//!12 Roman Number → Integer

//!13 Integer → Roman

//!14 Find largest word in a sentence
const findLargestWord = (str) => {
  let strArr = str.trim().split(" ");
  let largestWord = strArr[0];
  for (let word of strArr)
    if (word.length > largestWord.length) largestWord = word;
  return largestWord;
};
// console.log(findLargestWord("find largest word from the srtingss"));

const findLargestWordReduce = (str) => {
  return str
    .trim()
    .split(" ")
    .reduce((largest, word) => (largest.length < word.length ? word : largest));
};
// console.log(findLargestWordReduce("Tell me the biggest numbers"));

//!15 First repeating character in a string.
const firstRepeatingChar = (str) => {
  let freq = {};
  for (let char of str) freq[char] = (freq[char] || 0) + 1;
  for (let char of str) if (freq[char] > 1) return char;
  return null;
};
// console.log(firstRepeatingChar("vikaiass"));

//!16 Check if a string contains only digits
const checkDigits = (str) => {
  for (let char of str) {
    let code = char.charCodeAt(0);
    if (code < 48 || code > 57) return false;
  }
  return true;
};
// console.log(checkDigits("23456"));
// console.log(checkDigits("abc123"));

const checkDigitsInStr = (str) => /^\d+$/.test(str);
// console.log(checkDigitsInStr("567890"));
// console.log(checkDigitsInStr("5678cvb"));

//!17 Count words in a sentence.
const countWords = (str) => str.trim().replace(/\s+/g, " ").split(" ").length;
// console.log(countWords("          count words in the     string"));

//!18 Capitalize the first and last letter of each word
const capitalizeFirstLastLetterOfWord = (str) => {
  let strArr = str
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => {
      if (word.length === 1) return word.toUpperCase();
      return (
        word[0].toUpperCase() + word.slice(1, -1) + word.at(-1).toUpperCase()
      );
    });
  return strArr.join(" ");
};
// console.log(
// capitalizeFirstLastLetterOfWord(
// " capitalize the first and last  letter of a  string"
// )
// );

//!19 Check if two strings are isomorphic

//!20 Pangram Checking
const checkPangram = (str) => {
  let string = str.replace(/\s+/g, " ").toLowerCase();
  let letters = new Set();
  for (let char of string) if (char >= "a" && char <= "z") letters.add(char);
  return letters.size === 26;
};
// console.log(checkPangram("The quick brown fox jumps over the lazy dog"));
// console.log(checkPangram(" jumps over the lazy dog"));

// 📖 Additional Good-to-Know (Some Companies Ask)

//!21 Replace all spaces with %20 (URLify)
const URLify = (str) => str.replace(/\s+/g, "%20");
// console.log(URLify("vikas mewara rajput gahlot"));

// Remove all vowels from a string

//!22 Length of the longest word in a sentence
const lengthOfLongestWord = (str) => {
  let strArr = str.trim().split(/\s+/);
  let longestWord = strArr[0];
  for (let word of strArr)
    if (longestWord.length < word.length) longestWord = word;
  return {
    longestWordLength: longestWord.length,
  };
};
// console.log(lengthOfLongestWord("find length of longest word"));

//!23 Print all substrings of a string


// Valid palindrome (ignore spaces/special chars)

// Most frequent character in a string

// Find uncommon characters between two strings

// Sort characters alphabetically

// Swap case of each character (upper/lower)

// Reverse only vowels in a string

// 🚀 Extra Coverage (If Time Allows, Product Companies Ask These)

// Longest substring without repeating characters

// Longest palindromic substring

// Minimum deletions to make two strings equal

// Add binary strings

// Multiply two numbers in string form

// Excel sheet column title ↔ number conversion

// Smallest window containing all characters

// Longest substring with K unique characters

// Group anagrams together

// Interleaved strings check

// Edit Distance (Levenshtein distance)

// Longest valid parenthesis substring🔥 Must Prepare (Most Asked for Freshers)

// Palindrome Check

// Reverse a String

// Reverse words in a string

// Check if two strings are Anagrams

// Check for Rotation of strings

// First Non-Repeating Character

// Longest Common Prefix

// Count vowels and consonants

// Remove duplicates from a string

// Frequency count of characters

// ✅ Medium Level (Often Asked in Service-Based Interviews)

// Implement Atoi (string → integer)

// Roman Number → Integer

// Integer → Roman

// Find largest word in a sentence

// First repeating character in a string

// Check if a string contains only digits

// Count words in a sentence

// Capitalize the first letter of each word

// Check if two strings are isomorphic

// Pangram Checking

// 📖 Additional Good-to-Know (Some Companies Ask)

// Replace all spaces with %20 (URLify)

// Remove all vowels from a string

// Length of the longest word in a sentence

// Print all substrings of a string

// Valid palindrome (ignore spaces/special chars)

// Most frequent character in a string

// Find uncommon characters between two strings

// Sort characters alphabetically

// Swap case of each character (upper/lower)

// Reverse only vowels in a string

// 🚀 Extra Coverage (If Time Allows, Product Companies Ask These)

// Longest substring without repeating characters

// Longest palindromic substring

// Minimum deletions to make two strings equal

// Add binary strings

// Multiply two numbers in string form

// Excel sheet column title ↔ number conversion

// Smallest window containing all characters

// Longest substring with K unique characters

// Group anagrams together

// Interleaved strings check

// Edit Distance (Levenshtein distance)

// Longest valid parenthesis substring
