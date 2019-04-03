/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    
    let objectProp = {...someObj}
    console.log('Object typeof and properties');
    for(key in objectProp){
        console.log(`Object Property = ${key} and value = ${objectProp[key]}`);
    }
}

let chair = {
    material: 'Alumnium',
    weight: 40,
    year: 2015,
    usage: 'office',
    isbroken: false,
    hascushion: true
};
objectProperties(chair);