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
    for (i = 0; i < 10; i++) {
        const number = Math.floor(Math.random() * colors.length);
        const color = colors[number];
    }
    function gradientColor(color1, color2, color3, color4, color5, color6, color7, color8, color9) {
        body.style.background = `linear-gradient(0.25turn, ${color1}, ${color2}, ${color3}, ${color4}, ${color5}, ${color6}, ${color7}, ${color8}, ${color9})`;
    };
    gradientColor(color);

}

button.addEventListener("click", onColorBtnClick);

    // //같은 배열 인덱스가 나오지 않을 때까지 랜덤 숫자 추출
    // while (color1Index == color2Index) {
    //     console.log("same color");
    //     color2Index = Math.ceil(Math.random() * colors.length);