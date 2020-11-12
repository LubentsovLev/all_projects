function DNAStrand(dna) {
  let NAr = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      NAr.push("T");
    }
    if (dna[i] === "T") {
      NAr.push("A");
    }
    if (dna[i] === "C") {
      NAr.push("G");
    }
    if (dna[i] === "G") {
      NAr.push("C");
    }
  }
  return NAr.join('')
}
console.log(DNAStrand('ATTGC')); //TAACG
