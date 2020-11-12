const list = ["a", "b", "c"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]); //value
  console.log(i); //index
}

const list1 = ["a", "b", "c"];
list1.forEach((item, index) => {
  console.log(item); //value
  console.log(index); //index
});
//index is optional
list1.forEach((item) => console.log(item));

const list2 = ["a", "b", "c"];
let i2 = 0;
do {
  console.log(list2[i2]); //value
  console.log(i2); //index
  i2 = i2 + 1;
} while (i2 < list.length2);

const list3 = ["a", "b", "c"];
let i3 = 0;
while (i3 < list3.length) {
  console.log(list3[i3]); //value
  console.log(i3); //index
  i3 = i3 + 1;
}
object={}
for (let property in object) {
  console.log(property); //property name
  console.log(object[property]); //property value
}

for (const v of ["a", "b", "c"]) {
  console.log(v);
}

for (const [i, v] of ["a", "b", "c"].entries()) {
  console.log(i, v);
}
