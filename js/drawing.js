const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const lineWidth = 2;



function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    ctx.strokeStyle = "red";
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();


}


canvas.addEventListener("mousemove", onClick);