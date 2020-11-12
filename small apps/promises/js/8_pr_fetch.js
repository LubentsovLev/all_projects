let datafile1 = fetch("./js/data.json");
let datafile2 = fetch("./js/data.json");

Promise.all([datafile1,datafile1, datafile2])
  .then((f) => {
    f.forEach((fl) => {
      process(fl.json());
    });
  })
  .catch((err) => {});
let process = (prom) => {
  prom.then((data) => {
      debugger
    document.getElementById("output").innerHTML += `
      <h1>${data.nums}</h1>
      `;
  });
};



