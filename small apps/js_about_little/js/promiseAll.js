const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    debugger
    document.body.style.background = randomBg();
    let g =randomBg();
});

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
