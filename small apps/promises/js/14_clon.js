let a = [1,2,3,[332,333]]
let b = [...a]
let g = JSON.parse(JSON.stringify(a))

a[3].push('4')

console.log('a:',a);

console.log('b:',b);
console.log('g:',g);