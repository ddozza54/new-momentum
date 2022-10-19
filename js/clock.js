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

    function calDay() {
        const msdDay = new Date("2022-12-15") - new Date;
        const dDay = Math.floor(msdDay / (1000 * 60 * 60 * 24));
        return dDay;
    }

    christmas.innerText = `${calDay()}d ${String(23 - hour).padStart(2, "0")}h ${String(59 - minute).padStart(2, "0")}m ${String(60 - second).padStart(2, "0")}s`
}

setInterval(realTime, 1000);
setInterval(chirstmasDDay, 1000);