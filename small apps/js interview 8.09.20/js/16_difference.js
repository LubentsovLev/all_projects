let numbers = [12, 2, 6, 5, 9, 10, 33];

let difference = (function (arr) {
    let higth = arr.reduce( (a,b) => a > b ? a : b  )
    let low = arr.reduce( (a,b) => a < b ? a : b  )
    return higth - low
})

console.log(difference(numbers));