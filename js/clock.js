const clock = document.querySelector("h2#clock");
const christmas = document.getElementById("christmasClock");

function realTime() {
    const second = String(new Date().getSeconds()).padStart(2, "0");
    const minute = String(new Date().getMinutes()).padStart(2, "0");
    const hour = String(new Date().getHours()).padStart(2, "0");

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
realTime();
setInterval(realTime, 1000);
chirstmasDDay();
setInterval(chirstmasDDay, 1000);