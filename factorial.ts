console.log("karan");

/* 
1. make a function that accept parameter as number
2. The function will return a number
3. make an array that with length equal to number 
4. push number 1, 2, 3 ,.... n
5. Do reduce and multiply all numbers
*/

function getFactorial(num: number): number {
  const numArray: number[] = [];
  let fNum: number;
  for (fNum = 1; fNum <= num; fNum++) {
    numArray.push(fNum);
  }

  const result = numArray.reduce((acc: number, inc: number): number => {
    return (acc = acc * inc);
  });
  console.log(result);
  return result;
}

getFactorial(3);
