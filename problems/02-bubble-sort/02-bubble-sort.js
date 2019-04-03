/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let hold = 0;
    let passes = 0;
    let i = 0;
    let j = 0;
for (i = 0; i < numArray.length - 1; i++)
{
    for (j = 0; j <= numArray.length - i - 1; j++ )
    {
        if (numArray[j] > numArray[j+1]){
         hold = numArray[j];
         numArray[j] = numArray[j+1];
         numArray[j+1] = hold;
         passes = passes + 1;
        }
        
    }
}
console.log(`Total Amount ofswaps in bubble sort ${passes}`);
return numArray;
}

let numArray = [80.3, 33, 8, 109, 28, 17, 13, 9, 3, 95, 2, 54];
console.log(bubbleSort(numArray));

