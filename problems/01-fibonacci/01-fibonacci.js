/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
let num2 = 1;
let num1 = 0;
let num3 = 0;
for (i = 0; i <= n; i++)
{  
  num3 = num1;
  num1 = num1 + num2;
  num2 = num3;
  
}
return num1;
}

console.log(fib(6));