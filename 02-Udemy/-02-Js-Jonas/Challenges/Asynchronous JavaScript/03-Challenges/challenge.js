// Challenge #3

const loadNPause = async function () {
  try {
    let img = await createImg("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    img = await createImg("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImg(img));
    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img3.jpg"]);
