$.confirm = function (o) {
  return new Promise((resolve, reject) => {
    const modalConfirm = $.modal({
      title: o.title,
      closable: true,
      max_width: "400px",
      content: o.content,
      footer_btns: `
              <a href="#" onclick="modalConfirm.close();  ${reject()};  console.log("Cancel"); " class="btn btn-secondary">Отмена</a>
              <a href="#" onclick="modalConfirm.close();  ${resolve()}; console.log("Cancel"); " class="btn btn-danger" >Удалить</a>
            `,
    });
    modalConfirm.open();
  });
};
