const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
//or const loginButton = document.querySelecotr("#login-form button");


function handleLoginBtnClick(){
    const text = loginInput.value;
    console.log(text);
    console.log("click!");
}

loginButton.addEventListener("click", handleLoginBtnClick);