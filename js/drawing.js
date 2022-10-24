const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

ctx.rect(200, 200, 80, 200);
ctx.rect(90, 200, 100, 25);
ctx.rect(80, 200, 25, 100);
ctx.rect(380, 125, 25, 100);
ctx.rect(290, 200, 100, 25);

ctx.fill();

ctx.beginPath();
ctx.arc(240, 130, 50, 0, 2 * Math.PI);
ctx.fill();


ctx.beginPath();
ctx.arc(220, 120, 10, 1 * Math.PI, 0);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(260, 120, 10, 1 * Math.PI, 0);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(240, 140, 25, 0, 1 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();