const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    greetingBtn = document.querySelector(".js-greetingsBtn");

const USER_LS = "currentUser",
    SHOWING_ON = "showing";

function clearName(event){
    event.preventDefault();
    localStorage.removeItem(USER_LS);
    input.value = "";
    loadName();
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_ON);
    greeting.classList.remove(SHOWING_ON);
    greetingBtn.classList.remove(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greetingBtn.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null)
    {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
    greetingBtn.addEventListener("click", clearName);
}

init();