const title = document.querySelector("div.Hello h1");

function handleTitleClick(){

  const clickedClass = "active";
  
  // if(title.classList.contains(clickedClass)){

  //   title.classList.remove(clickedClass);

  // }
  // else{
  //   title.classList.add(clickedClass);
  // }
  // 위 코드를 한줄로 만들면

  title.classList.toggle(clickedClass);
}

title.addEventListener("click",handleTitleClick);

console.dir(title);