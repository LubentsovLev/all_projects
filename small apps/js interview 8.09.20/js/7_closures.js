function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);
}

function f2() {
    for (var i = 0; i < 3; i++) {
        let j = i 
        setTimeout(function () {
            console.log(j)
        }, 1000 * i);
    }
}
f2()