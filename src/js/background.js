const body = document.querySelector("body");
const changeBgBtn = document.querySelector("button#changeBgBtn");

const backgroundImages = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
    "bg7.jpg",
    "bg8.jpg",
];

const bgImage = document.createElement("img");

function chanegeBgImg() {
    const chosenNumber = Math.floor(Math.random() * backgroundImages.length);
    const chosenImage = backgroundImages[chosenNumber];

    bgImage.src = `img/${chosenImage}`;
    body.appendChild(bgImage);
}

chanegeBgImg();

function onChangeBgBtnClick() {
    bgImage.remove();
    chanegeBgImg();
}
changeBgBtn.addEventListener("click", onChangeBgBtnClick);
