let a = {'name': 'Sherlock'};
let b = {'name': 'Watson'};
let people = {};

people[a] = 'Detective';  // a  ['object':Object]
people[b] = 'Doctor';      // b  ['object':Object]
//can't use objects as keys for other objects
//object keys are converted into a string

console.log( people[a], people[b]);

let characters = new Map();
characters.set(a, 'Detective');
characters.set(b, 'Doctor');

console.log( characters.get(a), characters.get(b) );

for(let [key, value] of characters){
    console.log(`${key} = ${value}`);
}