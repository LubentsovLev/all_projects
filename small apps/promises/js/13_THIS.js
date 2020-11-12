let people = new Map();
let people2 = new Map([
  ["name1", "Ryan"],
  ["name2", "Jack"],
]);
people.set("name", "Ryan");
people.set("age", 21);
people.set("nameg", "Ryand");

// console.log(people);
// console.log(people2);

people2.forEach((v, k) => {
  console.log(v, k);
});

for(let k of people2.keys()){
    console.log(k);
}
for(let k of people2.values()){
    console.log(k);
}
for(let [k,v] of people2.entries()){
    console.log(k,v);
}
people2.delete('name1')
console.log(people2);
people2.clear()
console.log(people2);