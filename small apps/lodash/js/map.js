var arrayU = [1, 2, 2, 2, 3, 41, 3, 3, 4, 5, 4, 4, 41, 11, 1, 1, 55,2,2,2,2,1,1,1,1];

function _map(array, iteratee,num) {
    let index = -1
    const length = array == null ? 0 : array.length
    const result = new Array(length)
  //debugger
    while (++index < length) {
        
      let b = eval(`${array[index]}${iteratee}${num}`) 
      result[index] = b 
    }
    return result
}
console.log(_map(arrayU, '*', 5 ));
  