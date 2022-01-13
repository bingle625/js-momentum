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

function handleTitleEnter() {
    
    Title.innerText = "The mouse is here!"
}

function handleTitleLeave() {
    Title.innerText = "The mouse is gone!"
    togle = !togle; 
    if(togle){
        Title.style.color = "blue";
    }else{
        Title.style.color = "black";
    }
}

function handleResize() {
    Title.innerText= "You just resized";
    document.body.style.backgroundColor = "black";
}


function handleRightClick() {
    Title.innerText= "That was a Right Clcik";
}

console.log(window);
Title.addEventListener("click", handleTitleClick);
Title.addEventListener("mouseenter",handleTitleEnter);
Title.addEventListener("mouseleave",handleTitleLeave);
window.addEventListener('resize', handleResize);
window.addEventListener('contextmenu', handleRightClick);