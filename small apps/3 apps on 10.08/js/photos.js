let imagesUrl = [];
let photoInputEl = findInputEl();
let photoContainerEl = findPhotoContainerEl();
bindEnterClick(photoInputEl, photoContainerEl, imagesUrl);
restorePhotos(photoContainerEl,imagesUrl);

function findInputEl() {
  return document.querySelector(".js__photo-input");
}
function findPhotoContainerEl() {
  return document.querySelector(".js__photo-container");
}
function bindEnterClick(photoInputEl, photoContainerEl, imagesUrl) {
  photoInputEl.addEventListener("keyup", (e) => {
    if (e.code == "Enter") {
      //get url
      let src = photoInputEl.value;
      let div = document.createElement("div");
      div.innerHTML = `<img src=${src} />`;
      photoContainerEl.append(div);
      //push url
      imagesUrl.push(src);
      photoInputEl.value = ""

      //save to localStorage
      localStorage.setItem("photos", JSON.stringify(imagesUrl));
    }
  });
}
function restorePhotos(photoContainerEl,imagesUrl) {
    const photoStr = localStorage.getItem("photos");
    let photosUrls = JSON.parse(photoStr);
    if(!!photoStr) {
       photosUrls.forEach((src) => {
        imagesUrl.push(src);
        let div = document.createElement("div");
        div.innerHTML = `<img src=${src} />`;
        photoContainerEl.append(div);
       })
    }

}
