/**
 * 2. MaxChar (最大字符)
 * 描述： Given a string, return the character that is most commonly used in the string.
 * 
 * Examples：maxChar('abccccccd') => 'c'
 *           maxChar('apple 12311111') => '1'
 * 
 * 语言： Javascript(ES6)
 */

 function maxChar(str) {
     const charMap = {};
     let max = 0;
     let maxChar = '';

     // Map the chars and calculate their number
     for(let char of str) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
     }

     console.log(charMap)
     // Check which char is max char
     for(let char in charMap) {
         if(charMap[char] > max) {
             max = charMap[char];
             maxChar = char;
         }
     }

     return maxChar
 }

 console.log(maxChar('Hello World!')); // => 'l'