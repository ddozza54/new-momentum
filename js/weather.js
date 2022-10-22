

const API_KEY = "4fbccc77c98331be73c86f4ec3302b14";



function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const weather = document.getElementById("weather");
            const city = document.getElementById("city");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/${Math.round((data.main.temp) - 272.15)}Cº`;

        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

//1번 인자: 성공했을시 실행되는 함수
//2번 인자: 실패시 실행되는 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);