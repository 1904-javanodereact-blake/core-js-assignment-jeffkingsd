/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    //someStr.replace(/\s+/g,'');
for( i = 0; i < someStr.length; i++)
{
 // let palintest = someStr[i];
  let splittest = someStr.split('');

    for(j = 0; j < splittest.length - i;j++){
        //console.log(splittest[splittest.length- j - 1]); SHOWING HOW IT GET TESTED
        if (splittest[j] === splittest[splittest.length-j -1])
        {
            //Body just here to prove that palindrome are passing. Once sucessful it will exit the for loop and return true.
        }
        else{
            return false;
        }
    }
    
    return true;

}

}
let arrstr = ['racecar', 'fidof', 'bo b', 'level', 'lool'];
console.log(`List of String to test:  ${arrstr}`);
//let palinstr = 'racecar';
for (d = 0; d < arrstr.length; d++){

console.log(`Palindrome list ${isPalindrome(arrstr[d])}`);

}

/*
I got bored so I made one reading from an array and another read from a string format. Top is Array and bottom is String
*/
/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome2(someStr) {
for( i = 0; i < someStr.length; i++)
{
  //let palintest = someStr[i];
  let splittest = someStr.split('');

    for(j = 0; j < splittest.length - i;j++){
        //console.log(splittest[splittest.length- j - 1]); TEST TO SHOW STRING SUBSET
        if (splittest[j] === splittest[splittest.length-j -1])
        {
            //Body just here to prove that palindrome are passing. Once sucessful it will exit the for loop and return true.
        }
        else{
            return false;
        }
    }
    return true;
    }
}
let palinstr = 'rac ecar';
//palinstr.replace(/\s/,'');
console.log(`
\nString to test ${palinstr}
Palindrome list ${isPalindrome2(palinstr)}`);

