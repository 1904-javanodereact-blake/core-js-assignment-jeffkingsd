/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let splitarr1 = [];
    let splitarr2 = [];
  for(i = 0; i <= index - 1; i++){
    splitarr1.push(someArr[i]);
  }
  for(i = index; i <= someArr.length; i++){
      splitarr2.push(someArr[i]);
  }
  console.log(`First part of element split ${splitarr1}`);
  console.log(`Second part of element split ${splitarr2}`);
}

let index = 5;
let arr = [50, 30, 'Hello', true, 8, 'What', false];

spliceElement(arr, index);