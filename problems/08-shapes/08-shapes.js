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
  let colarr = [];
  switch (shape) {
    case 'square':
      for(i = 0; i < height; i++){
       rowarr.push(character);
        for(j = 0; j < height; j++){
         colarr.push(character);
        }
      } 
      console.log(rowarr[colarr]);
      break;
    case 'triangle':



      break;
    case 'Diamond':



      break;
    default:
      break;
  }
}

//Assuming a lot of things here
let shape = 'square';
let height = 15;
const character = '&'

printShape(shape, height, character);