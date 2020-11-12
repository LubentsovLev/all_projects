let fruits = [
  {
    id: 1,
    title: "Яблоки",
    price: 20,
    img:
      "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348",
  },
  {
    id: 2,
    title: "Апельсины",
    price: 30,
    img:
      "https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg",
  },
  {
    id: 3,
    title: "Манго",
    price: 40,
    img:
      "https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg",
  },
];
const toHTML = (fruit) => `
  <div class="col">
    <div class="card">
      <img class="card-img-top" style="height: 300px;" src="${fruit.img}" alt="${fruit.title}">
      <div class="card-body">
        <h5 class="card-title">${fruit.title}</h5>
        <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
        <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
      </div>
    </div>
  </div>
`;
function render() {
  const html = fruits.map(toHTML).join("");
  document.querySelector("#fruits").innerHTML = html;
}

render();
const modalMain = $.modal({
  title: "my Modal",
  closable: true,
  max_width: "400px",
  content: "",
  footer_btns: `
    <a href="#" onclick="modalMain.close()" class="btn btn-secondary" data-btn="price">Закрыть</a>
  `,
});
const confirmModal = $.modal({
  title: "are u sure",
  closable: true,
  max_width: "400px",
  content: "",
  footer_btns: `
    <a href="#" onclick="confirmModal.close()" class="btn btn-secondary" data-btn="price">Отмена</a>
    <a href="#"  class="btn btn-danger g" data-btn="confirmDelete" >Удалить</a>
  `,
});

document.addEventListener("click", (e) => {
  event.preventDefault();
  let id = +e.target.dataset.id;
  const fruit = fruits.find((f) => f.id === id);
  if (e.target.dataset.btn === "price") {
    modalMain.setContent(`
      <p>Prise of ${fruit.title}: <strong>${fruit.price}$</strong></p>
    `);
    modalMain.open();
  } else if (e.target.dataset.btn === "remove") {
    fruits = fruits.filter((f) => f.id !== +id);
    render();
    // confirmModal.open();
    // confirmModal.setContent(`
    //     <p> <b>Do u wanna delete</b> ${fruit.title}</p>
    //   `);
  } else if (e.target.dataset.btn === "confirmDelete") {
    //confirmModal.deleteOne(fruits, id);
  }
});
