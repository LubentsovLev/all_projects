const board = document.querySelector(".magicBoard");
const colors = [
  "#FFF5EE",
  "#F0FFF0",
  "#2F4F4F",
  "#CD5C5C",
  "#FF00FF",
  "#FF1493",
  "#9400D3",
  "#0000FF",
  "#00BFFF",
  "#008B00",
  "#FF6A6A",
  "#8B1A1A",
  "#FF6EB4",
  "#90EE90",
  "	#008B8B",
  "#8B0000",
  "#8B008B",
];
const squares = 500;

for (let i = 0; i < squares; i++) {
  const sq = document.createElement("div");

  sq.classList.add("sq");
  sq.addEventListener("mouseover", () => {
    setColor(sq);
  });
  sq.addEventListener("mouseout", () => {
    removeColor(sq);
  });
  board.appendChild(sq);
}

const setColor = (el) => {
  const color = randomColor(colors);
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

};

const removeColor = (el) => {
    el.style.background = "#1d1d1d ";
    el.style.boxShadow = "none";
};
const randomColor = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
