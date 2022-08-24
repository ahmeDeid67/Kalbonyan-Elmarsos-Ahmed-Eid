// Challenge #2
const imgContainer = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.setAttribute("src", imgPath);
    img.addEventListener("load", function () {
      imgContainer.appendChild(img);
      resolve(img);
    });
    img.addEventListener("Error", function () {
      reject(new Error("Image not found!"));
    });
  });
};

let currentImg;

createImg("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImg("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImg("img/img-3.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 3 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
