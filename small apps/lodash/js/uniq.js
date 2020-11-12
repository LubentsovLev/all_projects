var arrayU = [1, 2, 2, 2,3,41, 3, 3, 4, 5, 4, 4, 41, 11, 1, 1,55];
function _uniq_3(arr) {
    var seen = {};
    return arr.filter(function(item) {
        return seen.hasOwnProperty(item) 
        ? false 
        : (seen[item] = true);
    });
}
console.log(_uniq_3(arrayU));
