/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    return someStr.substring(startIndex, endIndex);

}

//Giving the variables inputs
let someStr = 'Final Fantasy 9';
if (isNaN(someStr) === false)
{
    throw 'Why is this an empty string or has a number in it?';
}
let Strlength = someStr.split('');
let num1 = Math.floor(Math.random()*Strlength.length);
let num2 = Math.floor(Math.random()*Strlength.length);
//Reroll if Substring overlaps Starting index should not surpass the endIndex.
while (num2 >= num1)
{
    num1 = Math.floor(Math.random()*Strlength.length);
    num2 = Math.floor(Math.random()*Strlength.length);
}
//num1 = 'happy';
//num2 = 'sad';


if (isNaN(num1) === true || isNaN(num2) === true)
{
    throw `Values ${num1} and ${num2} are not numbers! Number format only!`
}
console.log(`String is ${someStr}`);
console.log(`Start Index is ${num1}`);
console.log(`End Index is ${num2}`);
try {
    console.log(`Substring is ${substring(someStr,num1,num2)}`);    }
catch(e)
    {
        console.log(e);
    }