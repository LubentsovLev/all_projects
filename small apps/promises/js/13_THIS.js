let box = document.querySelector('.box');
let log = console.log;
let myFunc = function(){
    log('1', this);
    setTimeout( ()=> {
        log('3', 'timed out', this);
    }, 250)
};
let myFunc2 = () => {
    log('2', this);
    setTimeout( ()=> {
        log('3', 'timed out', this);
    }, 250)
};

box.addEventListener('mousedown', myFunc);
box.addEventListener('mouseup', myFunc2);

//myFunc();
//myFunc.call(window);
myFunc.apply(box);