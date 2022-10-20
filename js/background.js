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
    let color3Index = Math.floor(Math.random() * colors.length);
    let color4Index = Math.floor(Math.random() * colors.length);
    let color5Index = Math.floor(Math.random() * colors.length);
    let color6Index = Math.floor(Math.random() * colors.length);
    let color7Index = Math.floor(Math.random() * colors.length);
    let color8Index = Math.floor(Math.random() * colors.length);
    let color9Index = Math.floor(Math.random() * colors.length);

    //같은 배열 인덱스가 나오지 않을 때까지 랜덤 숫자 추출
    while (color1Index == color2Index) {
        console.log("same color");
        color2Index = Math.ceil(Math.random() * colors.length);
    }
    const color1 = colors[color1Index];
    const color2 = colors[color2Index];
    const color3 = colors[color3Index];
    const color4 = colors[color4Index];
    const color5 = colors[color5Index];
    const color6 = colors[color6Index];
    const color7 = colors[color7Index];
    const color8 = colors[color8Index];
    const color9 = colors[color9Index];
    body.style.background = `linear-gradient(0.25turn, ${color1}, ${color2}, ${color3}, ${color4}, ${color5}, ${color6}, ${color7}, ${color8}, ${color9})`;
}

button.addEventListener("click", onColorBtnClick);