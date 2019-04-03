/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let rowarr = [];
  let rowout;
  let spaces;
  switch (shape) {
    case 'square':
    rowout = character;
      for(i = 0; i < height - 1; i++){
       rowarr.push(character);
       rowout = rowout + '  ' + rowarr[i];
      }
      for (j = 0; j < height; j++)
      {
        console.log(rowout);
      }
      break;
    case 'triangle':
    rowout = character;
    console.log(rowout);
    for (i = 0; i < height -1 ; i++)
    {
        rowarr.push(character);
        rowout = rowout + '  ' + rowarr[i];
        console.log(rowout);
    
      }
    
      break;
    case 'diamond':
      for (i = 1; i <= height; i++)
      {
        rowout ='';
        for (j= 1; j <= height - i; j++)
        {
          rowout += ' ';
        }

        for (g = 1; g <= 2*i-1; g++)
        {
          rowout += character;
        }
        
        console.log(rowout)
      }

      for (i = height; i >= 0; i--){
        rowout =' ';
        for (j = height; j - 1 >= 0 + i; j--){
          rowout += ' ';
        }
        for (g = 3; g <= 2*i-1; g++)
        {
          rowout+= character;
        }
        console.log(rowout);
      }
      break;
    default:


      break;
  }
}

//Assuming a lot of things here
let shape = 'diamond';
let height = 10;
const character = '&'

printShape(shape, height, character);