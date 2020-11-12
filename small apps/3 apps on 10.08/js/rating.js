let stars = findAllStars();
bindClickListener(stars);
restorePrevValue(stars);

function findAllStars() {
  let stars = document.querySelectorAll(".stars__star");
  return stars;
}
function bindClickListener(stars) {
  stars.forEach((star) => {
    star.addEventListener("click", (e) => {
      // remove active class
      let activeStars = document.querySelectorAll(".star__active");
      activeStars.forEach((AStar) => {
        AStar.classList.remove("star__active");
      });
      // add active class
      let clickedStar = e.currentTarget;
      let clickedStarIndex = 0;

      for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.classList.add("star__active");
        if (star == clickedStar) {
          clickedStarIndex = i;

          break;
        }
      }
      // save active stars
      localStorage.setItem("rating", clickedStarIndex);
    });
  });
}
function restorePrevValue(stars) {
  var savedStars = localStorage.getItem("rating");
  if (!!savedStars) {
    savedStars = +savedStars;
    // remove active class
    let activeStars = document.querySelectorAll(".star__active");
    activeStars.forEach((AStar) => {
      AStar.classList.remove("star__active");
    });
    for (let i = 0; i < stars.length; i++) {
      let star = stars[i];
      star.classList.add("star__active");
      if (i === savedStars) {
        break;
      }
    }
  }
}
