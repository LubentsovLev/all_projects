
let p1 = Promise.reject(111);

let p2 = Promise.resolve(222);

let p3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 333);
});

Promise.race([p3,p2,p1])
.then((res) => {
console.log('w:' ,res );
} )
.catch((res) =>{
    console.log('l:' ,res );
})