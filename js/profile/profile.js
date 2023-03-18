const profileTitle = document.querySelector("#profile_title");


const username = localStorage.getItem(USERNAME_KEY);
profileTitle.innerText = `${username}'s Profile`;

