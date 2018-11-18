/**
 * 7. Anagrams (变位词问题)
 * 描述: Check to see if two provided strings are anagrams of eachother.
 *      One string is an anagram of another if it uses the same characters
 *      in the same quantity. Only consider characters, not spaces
 *      or punctuation.  Consider capital letters to be the same as lower case.
 * 
 * Examples：
 *      anagrams('rail safety', 'fairy tales') --> True
 *      anagrams('RAIL! SAFETY!', 'fairy tales') --> True
 *      anagrams('Hi there', 'Bye there') --> False
 * 
 * 语言： Javascript(ES6)
 */

 // 1. method one
 function buildCharMap(str){
     const charMap = {};

     for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
         charMap[char] = charMap[char] + 1 || 1;
     }

     return charMap;
 }

 function anagrams1(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }

    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;
 }

 // method two
function cleanString(str){
    console.log("check clean string", str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join(''));
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


 function anagrams2(stringA, stringB){
    return cleanString(stringA) === cleanString(stringB);
 }

 // test method one
 console.log(anagrams1('rail safety', 'fairy tales'));
 console.log(anagrams1('RAIL! SAFETY!', 'fairy tales'));
 console.log(anagrams1('Hi there', 'Bye there'));

  // test method two
  console.log(anagrams2('rail safety', 'fairy tales'));
  console.log(anagrams2('RAIL! SAFETY!', 'fairy tales'));
  console.log(anagrams2('Hi there', 'Bye there'));