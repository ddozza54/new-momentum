const button = document.querySelector("button#colorbutton");
const body = document.querySelector("body");

const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

function onColorBtnClick() {
    const color1Index = Math.floor(Math.random() * colors.length);
    let color2Index = Math.floor(Math.random() * colors.length);
    console.log(color1Index);
    console.log(color2Index);
    //같은 배열 인덱스가 나오지 않을 때까지 랜덤 숫자 추출
    while (color1Index == color2Index) {
        console.log("same color");
        color2Index = Math.ceil(Math.random() * colors.length);
    }
    console.log(color1Index);
    console.log(color2Index);
    const color1 = colors[color1Index];
    const color2 = colors[color2Index];
    body.style.background = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}

button.addEventListener("click", onColorBtnClick);