"use strict";
console.log("karan");
/*
1. make a function that accept parameter as number
2. The function will return a number
3. make an array that with length equal to number
4. push number 1, 2, 3 ,.... n
5. Do reduce and multiply all numbers
*/
function getFactorial(num) {
    const numArray = [];
    let fNum;
    for (fNum = 1; fNum <= num; fNum++) {
        numArray.push(fNum);
    }
    const result = numArray.reduce((acc, inc) => {
        return (acc = acc * inc);
    });
    console.log(result);
    return result;
}
getFactorial(3);
