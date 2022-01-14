const title = document.querySelector("div.Hello h1");

function handleTitleClick(){
  title.className = "active";
}

title.addEventListener("click",handleTitleClick);

console.dir(title);