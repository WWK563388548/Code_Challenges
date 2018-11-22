/**
 * 9. Printing Steps (根据步数打印图形)
 * 描述:  Write a function that accepts a Positive number N.  The function should
 *       console log a step shape with N levels using the "#" character. Make sure
 *       the step has spaces on the right hand side!
 * 
 * Examples：
 *      steps(2) --> '#'
 *                   '##'
 *      steps(3) --> '#'
 *                   '##'
 *                   '###'
 *      steps(4) --> '#'
 *                   '##'
 *                   '###'
 *                   '####'
 * 
 * 语言： Javascript(ES6)
 */

 // method one
 function steps1(n){
    for (let row = 0; row < n; row++){
        let stair = '';

        for(let column = 0; column < n; column++){
            if(column <= row){
                stair += "#";
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
 }

  // method two by recursion
  function steps2(n, row = 0, stair = ''){
    if(n === row){
        return;
    }

    if(n === stair.length){
        console.log(stair)
        return steps2(n, row + 1)
    }

    if(stair.length <= row){
        stair += '#';
    } else {
        stair += ' ';
    }

    steps2(n, row, stair);
 }

 steps1(3);
 steps1(4);

 steps2(5);
 steps2(6);

 // recursion
 function printNumber(n, dec = 1){
     if(n === 0){
         return;
     }
     console.log("check n", n);
     printNumber(n - dec);
 }

 printNumber(10);