const images = ["./img/cat01.jpg", "./img/cat02.jpg", "./img/cat03.jpg"];

let button = document.querySelector("button");
let img = document.querySelector("img");

let count = 1;

button.addEventListener("click", function () {
  if (count === 3) {
    count = 0;
  }
  img.src = images[count];
  count += 1;
});
