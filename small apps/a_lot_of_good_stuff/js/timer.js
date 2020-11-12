const timer = document.querySelector(".timer");
const startM = 10;
let time = startM * 60;

const updateTimer = () => {
  const min = Math.floor(time / 60);
  let sec = time % 60
  sec = sec < 10 ? '0' + sec : sec
  timer.innerHTML = `${min}:${sec}`
  time--;
  time = time <= 0 ? time = 0 : time
};
setInterval(() => {
    updateTimer()
}, 1000);
