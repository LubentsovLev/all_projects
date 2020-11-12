let push = document.querySelector('.push')
let deleteI = document.querySelector('.deleteI')
let m = document.querySelector('.m')

let t1 = ''

for (let i = 0; i <= 50; i++) {
    t1 += i + ' '
}


let ready = () => {
    m.innerHTML=t1
}
let deleteItems = () => {
    return m.innerHTML='' 
}

push.onclick = ready;

deleteI.onclick = deleteItems;

