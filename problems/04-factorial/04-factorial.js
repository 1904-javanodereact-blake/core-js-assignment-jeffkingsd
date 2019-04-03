/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    let hold = sumNum;
    let temp = 0;
    let count = sumNum;
    for (i = 0; i < count; i++)
    {
        if( sumNum != 1 )
        {
            hold =  hold * (sumNum-1);
            sumNum--;
        }
    }
    return hold;
}

let num1 = Math.floor(Math.random()*10+1);
console.log(`Your Number for Factorial is ${num1}`);
console.log(`Your Factorial number is ${factorial(num1)}`);