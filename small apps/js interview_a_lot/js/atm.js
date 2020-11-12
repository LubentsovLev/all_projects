const iWant = (summ) => {
  const avalibleNotes = [100, 50, 20, 10];
  const result = [];
  if (summ > 0) {
    for (let i = 0; i < avalibleNotes.length; i++) {
      let note = avalibleNotes[i];
      while (summ - note >= 0) {
        summ -= note;
        result.push(note);
      }
    }
  } else {
    console.log("no value");
  }
  return result;
};
console.log(iWant(374));
