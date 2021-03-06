function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-overlay" data-close="true" >
      <div class="modal-window" style ="max-width: ${
        options.max_width || "600px"
      }">
        <div class="modal-header">
          <span class="modal-title">${options.title || "Modal"}</span>
          ${
            options.closable
              ? `<span class="modal-close" data-close="true" >&times;</span>`
              : ""
          }
        </div>
        <div class="modal-body">
          ${options.content || ""}
        </div>
        <div class="modal-footer">
        ${options.footer_btns}
        </div>
      </div>
    </div>
  `
  );
  document.body.appendChild(modal);
  return modal;
}

/*
 * title: string
 * closable: boolean
 * content: string
 * width: string ('400px')
 * destroy(): void
 * Окно должно закрываться
 * --------------
 * setContent(html: string): void | PUBLIC
 * onClose(): void
 * onOpen(): void
 * beforeClose(): boolean
 * --------------
 * animate.css
 * */
$.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;
  let destroyed = false;

  const modal = {
    open() {
      !closing && $modal.classList.add("open");
    },
    close : function() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, ANIMATION_SPEED);
    },
    destroy() {
      $modal.parentNode.removeChild($modal);
      destroyed = true;
      $modal.removeEventListener();
    },
    setContent(html) {
      $modal.querySelector(".modal-body").innerHTML = html;
    },
    deleteOne(arr , id){
      arr = arr.filter(f => f.id !== +id)
    }
  };

  const listener = (e) => {
    if (e.target.dataset.close) {
      modal.close();
    }
  };

  $modal.addEventListener("click", listener);

  return modal;
};
