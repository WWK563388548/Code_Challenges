/**
 * 8. Sentence Capitalization (句子单词大写问题)
 * 描述:  Write a function that accepts a string.  The function should
 *       capitalize the first letter of each word in the string then
 *       return the capitalized string.
 * 
 * Examples：
 *      capitalize('a short sentence') --> 'A Short Sentence'
 *      capitalize('a lazy fox') --> 'A Lazy Fox'
 *      capitalize('look, it is working!') --> 'Look, It Is Working!'
 * 
 * 语言： Javascript(ES6)
 */

 // method one 
function capitalize1(str){
    const words = [];

    for (let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

 // method two
 function capitalize2(str){
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++){
        if (str[i - 1] === ' '){
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
 }

 // check method one 
console.log(capitalize1('a short sentence'));
console.log(capitalize1('a lazy fox'));
console.log(capitalize1('look, it is working!'));

 // check method two 
 console.log(capitalize2('a short sentence'));
 console.log(capitalize2('a lazy fox'));
 console.log(capitalize2('look, it is working!'));