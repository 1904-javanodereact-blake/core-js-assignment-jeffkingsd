/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {

   let hold;
   let isEvennum;
  hold = someNum / 2;
    hold = hold - Math.floor(hold);
    isEvennum = hold * 2
    if (isEvennum == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log('Set of 10 numbers')
for (i = 0; i < 10; i++)
{
let num = Math.floor(Math.random()*1000+1);

console.log(`Number ${i+1} is ${num} Is num even? ${isEven(num)}`);
}
