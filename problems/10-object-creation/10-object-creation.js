/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

class Object1 {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
}

let jeff = new Object1('Jeffrey', 88);

console.log(jeff);

function object2(name, age){
    this.name = name;
    this.age =age;
}

let kevin = new object2('Kevin', 728);
console.log(kevin);

let object3 = {
    name: 'Kadi',
    age: 40
}

console.log(`Object3
    name is ${object3.name}
    age is ${object3.age}`);
