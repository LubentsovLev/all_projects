const names = ['florida','california','florida','NYC','Utah']
debugger
const every = names.every((item) => {
    return item.length 
})
const some = names.some((item) => {
    return item.length === 3 
})


console.log(every);
console.log(some);