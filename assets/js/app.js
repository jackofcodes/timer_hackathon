
// image slider begin ---------------------------------------------------------

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var imageBox = document.querySelector(".img-box img");


var count = 0;

prevBtn.addEventListener("click", function () {
  if (count <= 0) {
    count = 0;
  } else {
    count--;
  }
  imageBox.src = images[count];
});

nextBtn.addEventListener("click", function () {
  if (count >= images.length - 1) {
    count = images.length - 1;
  } else {
    count++;
  }
  imageBox.src = images[count];
});

// image slider end --------------------------------------






