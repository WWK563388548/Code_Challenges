/**
 * 2. Integer Reversal (反转整数)
 * 描述： Given an integer, return an integer that is the reverse ordering of numbers
 * 
 * Examples：reverseInt(15) => 51
 *           reverseInt(981) => 189
 *           reverseInt(500) => 5
 *           reverseInt(-15) => -51
 *           reverseInt(-90) => -9
 * 
 * 语言： Javascript(ES6)
 */

 function reverseInt(num) {
    // 反转数字
    const reversed = num.toString().split('').reverse().join('');
    // parseInt()方法
    // Math.sign()方法
    return parseInt(reversed) * Math.sign(num);
 }

console.log(reverseInt(981)); // 结果 => 189
console.log(reverseInt(500)); // 结果 => 5
console.log(reverseInt(-15)); // 结果 => -51
console.log(reverseInt(-90)); // 结果 => -9