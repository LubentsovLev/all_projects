let classNames = [
  "header",
  "menu",
  "menu-item",
  "menu-item",
  "menu-item",
  "menu-item",
  "menu-item",
  "footer",
  "menu",
  "link",
  "link",
  "link",
  "link",
];

let cnCount = {};
let arrUniq = []
for (let i = 0; i < classNames.length; i++) {
  if (cnCount[classNames[i]]) {
    cnCount[classNames[i]] += 1;
  } else {
    cnCount[classNames[i]] = 1;
    arrUniq.push(classNames[i])
  }
}
let result = arrUniq.sort((a,b) => cnCount[b] - cnCount[a] );
console.log(result);
