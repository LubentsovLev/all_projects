let glossaryInput = document.querySelector(".glossary");
glossaryInput.addEventListener("change", function (e) {
  let file = glossaryInput.files[0];
  let reader = new FileReader();
  reader.onload = function (e) {
    palindromm(reader.result.split("\r\n"));
  };
  reader.readAsText(file);
});

function palindromm(arr) {
  for (let i = 0; i < arr.length; i++) {
    str2 = arr[i].toLowerCase().split("").reverse().join("");
    if (str2 == arr[i]) {
      console.log(arr[i]);
    }
  }
}
