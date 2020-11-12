const UpdateH1 = document.querySelector(".updateDataH1");

let updateData = () => {
    fetch("https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1")
.then(res => res.json())
.then(res => {
    UpdateH1.innerHTML = res.value
})


}
updateData()