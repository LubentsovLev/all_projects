let w = 7;
let h = 5;

function matrix(w, h) {
  let result = new Array(h).fill().map(() => new Array(w).fill(""));
  let counter = 1;
  let startColumn = 0;
  let endColumn = w - 1;
  let startRow = 0;
  let endRow = h - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return result;
}
console.log(matrix(w, h));
let b = matrix(w, h);
document.querySelector(".mat").innerHTML = b;
