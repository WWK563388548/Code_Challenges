/**
 * 1. String Reversal (反转字符串)
 * 描述： Given a string, return a new string with the reversed order of characters.
 * Examples：reverse('hello') => 'olleh'
 * 语言： Javascript(ES6)
 */

// 方法一：使用数组中的方法
function reverse1(str) {
    const arr = str.split(''); // split()方法
    arr.reverse(); // reverse()方法

    return arr.join(''); // join()方法
}


// 方法二： 使用循环语句
function reverse2(str) {
    let reversed = '';
    // 此处的for循环语句还可以替换为'for..of..'语句
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed; // 注意相加顺序
    }

    return reversed;
}

// 方法三：使用reduce()方法
function reverse3(str) {
    // reduce()方法
    return str.split('').reduce((reversed, item) => {
        return item + reversed;
    }, '');
}

console.log(reverse1('I just test this code.')); // 结果 => '.edoc siht tset tsuj I'
console.log(reverse2('I just test this code.')); // 结果 => '.edoc siht tset tsuj I'
console.log(reverse3('I just test this code.')); // 结果 => '.edoc siht tset tsuj I'


