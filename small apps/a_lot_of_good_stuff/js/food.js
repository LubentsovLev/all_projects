const mealBtn = document.querySelector(".get_meal");
const mealContainer = document.querySelector(".meal");
mealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});
let createMeal = (meal) => {
  mealBtn.innerHTML = "Get Another Meal  🍔";
  const Ingredients = [];

  for (i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      Ingredients.push(meal[`strIngredient${i}`]);
    } else {
      break;
    }
  }

  const Measures = [];
  for (i = 1; i <= 20; i++) {
    if (meal[`strMeasure${i}`] === " ") {
      break;
    } else if (meal[`strMeasure${i}`]) {
      Measures.push(meal[`strMeasure${i}`]);
    } else {
      break;
    }
  }
  mealContainer.innerHTML = `
    <div class="" >
        <div>
            <div class="food__img-inner">
                    <div class="food__img-item" >
                        <img src="${meal.strMealThumb}" >       
                    </div>
                    <div class="food__img-item ">
                        <h2><strong>Dish Recipe:</strong></h2>
                        <p>${meal.strInstructions}</p>
                </div>
            </div>
        </div>
        <div class="food__info">
            <h1 class="title" >Info</h1>
            <h2><strong>Dish name: </strong><span class="food__info-span">${
                meal.strMeal ? meal.strMeal : "no info"
              }</span></h2>
            <h2><strong>Category: </strong><span class="food__info-span"> ${
              meal.strCategory ? meal.strCategory : "no info"
            }</span></h2>
              <h2><strong>Area: </strong><span class="food__info-span">${
                meal.strArea ? meal.strArea : "no info"
              }</span></h2>
              <h2><strong>Tags: </strong> <span class="food__info-span"> ${
                meal.strTags ? meal.strTags.split(",").join(", ") : "no info"
              } </span></h2>
        </div>
        <div class="ing__container" >
        <h1 class="title" >What do u need</h1>
            <div class="ing__inner">
                <div class="ing__item">
                    <strong>Ingredients:</strong>
                    <ul>
                    ${Ingredients.map(
                      (i) =>
                        `
                        <li>${i}</li>
                        `
                    ).join("")}
                    </ul>
                </div>
                <div class="ing__item">
                    <strong>Measures:</strong>
                    <ul>
                    ${Measures.map(
                      (i) =>
                        `
                        <li>${i}</li>
                        `
                    ).join("")}
                    </ul>
                </div>
            </div>
        </div>
        <div class="food__video">
            <h1 class="title" >All the recipe in video</h1>
            <div class="food__video-inner">
            <iframe class="food__video-inner" 
                src="https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}" >
            </iframe>
            </div>
        </div>
    </div>
    `;
};
