const troll = (str) => {
  str = str.split(/\s+/g);
  let fWords = ["LOL","Nude"];
  let Clreared = [];
  for (let i = 0; i <= str.length; i++) {
    //debugger;
    if (fWords.includes(str[i])) {
      Clreared.push("***");
    } else {
      Clreared.push(str[i]);
    }
  }
  return Clreared.join(" ");
};

console.log(troll("Nude This website is for losers LOL"));
