//1.Reverse a string.
var reverseStr = function (str) { return str.split("").reverse().join(""); };
var str1 = "Vikas";
// console.log(reverseStr(str1));
//2.Check if a string is a palindrome.
var checkPalindrome = function (str) {
    var reverseStr = str.split("").reverse().join("");
    return reverseStr === str;
};
var str2 = "madam";
console.log(checkPalindrome(str2));
//3.Count vowels and consonants in a string.
var countVowelsConsonants = function (str) {
    var vowelsCount = 0;
    var consonantsCount = 0;
    var specialCharCount = 0;
    var targetStr = str.toLowerCase();
    var allVowels = "aeiou";
    for (var _i = 0, _a = targetStr; _i < _a.length; _i++) {
        var char = _a[_i];
        if (allVowels.includes(char)) {
            vowelsCount++;
        }
        else if (char >= "a" && char <= "z") {
            consonantsCount++;
        }
        else {
            specialCharCount++;
        }
    }
    return { vowelsCount: vowelsCount, consonantsCount: consonantsCount, specialCharCount: specialCharCount };
};
var str3 = "This is Typescript";
console.log(countVowelsConsonants(str3));
/*
npx tsc string.ts
node string.js
*/
