//1.Reverse a string.
const reverseStr = (str: string): string => str.split("").reverse().join("");
let str1: string = "Vikas";
// console.log(reverseStr(str1));

//2.Check if a string is a palindrome.
const checkPalindrome = (str: string): boolean => {
  let reverseStr: string = str.split("").reverse().join("");
  return reverseStr === str;
};
let str2: string = "madam";
console.log(checkPalindrome(str2));

//3.Count vowels and consonants in a string.
const countVowelsConsonants = (
  str: string
): {
  vowelsCount: number;
  consonantsCount: number;
  specialCharCount: number;
} => {
  let vowelsCount: number = 0;
  let consonantsCount: number = 0;
  let specialCharCount: number = 0;
  let targetStr: string = str.toLowerCase();
  let allVowels: string = "aeiou";
  for (let char of targetStr as string) {
    if (allVowels.includes(char)) {
      vowelsCount++;
    } else if (char >= "a" && char <= "z") {
      consonantsCount++;
    } else {
      specialCharCount++;
    }
  }
  return { vowelsCount, consonantsCount, specialCharCount };
};
let str3: string = "This is Typescript";
console.log(countVowelsConsonants(str3));

/* 
npx tsc string.ts 
node string.js 
*/
