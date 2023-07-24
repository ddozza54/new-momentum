const memoImg1 = document.querySelector(".memo_img1");
const memoImg2 = document.querySelector(".memo_img2");
const memoImg3 = document.querySelector(".memo_img3");
const memoImg4 = document.querySelector(".memo_img4");

const memoImgBgCol = [
    "#FFD6B0",
    "#FFF5EA",
    "#fbbd2e",
    "#ef9f3c",
    "#ffcac7",
];
function randomBgColor(img) {
    const randomNum = Math.floor(Math.random() * memoImgBgCol.length);

    img.style.backgroundColor = `${memoImgBgCol[randomNum]}`;
}
randomBgColor(memoImg1);
randomBgColor(memoImg2);
randomBgColor(memoImg3);
randomBgColor(memoImg4);