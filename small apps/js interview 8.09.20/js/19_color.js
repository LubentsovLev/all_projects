let tColor = (bg) => {
  bg = bg.replace("#", "");
  let red = parseInt(bg.substring(0, 2), 16);
  let green = (parseInt(bg, 16) >>> 8) & 255;
  let blue = (parseInt(bg, 16) >>> 8) & 255;
  let intensity = red * 0.299 + green * 0.587 + blue * 0.114;
  if (intensity > 186) {
    return "FFFFFF";
  } else {
    return "000000";
  }
};
//debugger
let g = "#" + tColor(color());
document.querySelector("body").style.color = g;
