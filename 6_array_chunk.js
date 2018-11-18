/**
 * 6. Array Chunk (数组块问题)
 * 描述: Given an array and chunk size, divide the array into many subarrays
 *      where each subarray is of length size
 * 
 * Examples：
 *      chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 *      chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
 *      chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 *      chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
 *      chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
 * 
 * 语言： Javascript(ES6)
 */

// 1. method one
function chunk1(array, size){
    // 1. declare a new array
    const chunked = [];

    for(let element of array){
        const last = chunked[chunked.length - 1];
        // console.log("last", last)
        if(!last || last.length === size){
            // console.log("element", [element]);
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}

// 2. method two
// Main point: slice()
function chunk2(array, size){
    const chunked = [];
    let index = 0;

    while (index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

// check method one
console.log(chunk1([1, 2, 3, 4], 2));
console.log(chunk1([1, 2, 3, 4, 5], 4));
console.log(chunk1([1, 2, 3, 4, 5], 10));
console.log(chunk1([1, 2, 3, 4, 5, 6, 7, 8], 3));

// check method two
console.log(chunk2([1, 2, 3, 4], 2));
console.log(chunk2([1, 2, 3, 4, 5], 4));
console.log(chunk2([1, 2, 3, 4, 5], 10));
console.log(chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3));