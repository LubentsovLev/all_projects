let result = ["1", "7", "11"];
let g = result.map((n) => (n = Number(n))); //returns [1, NaN, 3]

console.log(g);

let sam = {
    castiel: "mary"
}
let dean = {
    john: "crowley",
    mary: "chuck"
}

//which, if any, of these three log statements will work?
console.log(dean[sam.castiel]);// dean['mary] => chuck
console.log(dean.sam.castiel);//nope
console.log(dean[sam['castiel']]);//dean['mary] => chuck
console.log(dean[sam[castiel]]);//nope