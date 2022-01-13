const Title = document.querySelector("div.Hello h1");

let togle = false;

function handleTitleClick() {
    togle = !togle;
    if(togle){
        Title.style.color = "blue";
    }else{
        Title.style.color = "black";
    }
}

Title.addEventListener("click", handleTitleClick);