/**
 * 5. fizzBuzz (fizzBuzz问题)
 * 描述: Write a program that console logs the numbers from 1 to n.
 *      But for multiples of 3 print 'fizz' instead of the number
 *      and for the multiples of 5 print 'Buzz'. For numbers which are
 *      multiples of both 3 and 5 print "fizzBuzz".
 * 
 * Examples：fizzBuzz(5); // => 1, 2, fizz, 4, Buzz
 * 
 * 语言： Javascript(ES6)
 */

 // 关键点是 '%' 符号
 function fizzBuzz(num) {
     for(let i = 1; i <= num; i++) {
         // 不要搞错判断条件的顺序
         if(i % 3 === 0 && i % 5 === 0) {
             console.log('fizzBuzz');
         } else if (i % 3 === 0) {
             console.log('fizz');
         } else if (i % 5 === 0) {
             console.log('Buzz');
         } else {
             console.log(i);
         }
     }
 }

 console.log(fizzBuzz(100));