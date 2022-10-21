const loginForm = document.querySelector(".indexPage_login_form");
const loginInput = document.querySelector(".indexPage_login_form input");
const greeting = document.querySelector("#greeting");
const loginUser = document.querySelector(".indexPage_login_user");
const logoutBtn = document.getElementById("logOutBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    loginUser.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutBtnClick() {
    localStorage.removeItem(USERNAME_KEY);
    loginUser.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}
logoutBtn.addEventListener("click", onLogoutBtnClick);