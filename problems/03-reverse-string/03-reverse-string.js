/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
let StrSplit = someStr.split(''); //Splitting String by each character and turns it into an array
let reverseStr = '';              //Holding the value and building the charcter back into string or Array????


for(i = StrSplit.length - 1; i >= 0; i--)
{
 reverseStr = reverseStr + someStr[i];
}
return reverseStr;
}


let testStr = ('illimuniatiiswatchingus');
console.log(`Normal String =  ${testStr}`);               //Normal String
console.log(`Reverse String = ${reverseStr(testStr)}`);   //Reversed String