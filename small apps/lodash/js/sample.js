var arrayNth = ["a", "b", "c", "d",'PHP', 'JavaScript', 'Python', 'Perl', 'Ruby', 'Go', 'Java'];
function _sample(array, n) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return;
  }
  return (n, length) ? array[n] : undefined;
}

function _sampleTheSame(arr ) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
//Math.floor(Math.random() * arr.length);

console.log(_sampleTheSame(arrayNth));

