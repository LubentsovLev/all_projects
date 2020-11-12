const str = '12345678'
const array = [1,1,1,2,2,3,3,6,1,2,1,3,4,4]
const resA = Array.from(new Set(array)).sort((a,b) => a - b)
const res = Array.from(str,Number)
console.log(res);
console.log(resA);