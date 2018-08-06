/**
 * 2. Plaindrome (回文字)
 * 描述： Given a string, return a true if the string is a palindrome or false if it is not.
 *       Palindromes are strings that form the same word if it is reversed. Include spaces and 
 *       punctuation in determining if the string is a palindrome.
 * 
 * Examples：palindrome('abba') === true
 *           palindrome('abcdefg') === false
 * 
 * 语言： Javascript(ES6)
 */

 // 方法一：使用反转字符串来解决
 function palindrome1(str) {
     // 反转字符串
     const reversed = str.split('').reverse().join('');

    return str === reversed;
 }

 // 方法二：使用every()方法
 function palindrome2(str) {
     return str.split('').every((character, index) => {
         return character === str[str.length - index - 1];
     });
 }

 console.log(palindrome1('abcba')); // 结果 => true
 console.log(palindrome2('abcba')); // 结果 => true
 

