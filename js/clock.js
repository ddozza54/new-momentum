const clock = document.querySelector("h2#clock");
const christmas = document.querySelector("h2#christmasClock");

function realTime() {
    const second = new Date().getSeconds();
    const minute = new Date().getMinutes();
    const hour = new Date().getHours();

    clock.innerText = `${hour}:${minute}:${second}`
}

function chirstmasDDay() {
    const second = new Date().getSeconds();
    const minute = new Date().getMinutes();
    const hour = new Date().getHours();
    const date = new Date();
    const christmas = new Date("2022-12-15");
    const dDay = date - christmas;

    christmas.innerText = `${dDay}d ${23 - hour}h ${59 - minute}m ${60 - second}s`
}

setInterval(realTime, 1000);
setInterval(chirstmasDDay, 1000);