let box = {};
let bag = {
  prop: "bag",
  can: "box",
};
let can = {
  prop: "can",
  bag: "box",
};
box[bag] = "Monday"; // box [ '[Object object]'] = Monday
box[can] = "Tuesday"; // box [ '[Object object]'] = Tuesday

console.log(box[bag]);
