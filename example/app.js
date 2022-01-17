const body = document.body;
// const BIG_SCREEN ="bigScreen";
// const MEDIUM_SCREEN = "mediumScreen";
// const SMALL_SCREEN = "smallScreen";

// const width = window.innerWidth;
// if(width>1000){
//     body.classList.add(BIG_SCREEN);
//     body.classList.remove(MEDIUM_SCREEN);
// }else if(width <= 1140 && width >= 700){
//     body.classList.add(MEDIUM_SCREEN);
//     body.classList.remove(SMALL_SCREEN);
// } else{
//     body.classList.remove(MEDIUM_SCREEN);
//     body.classList.add(SMALL_SCREEN);
// }


function handleResize(){
    const originalSize = window.screen.width;
    const windowSize =window.innerWidth;
    const percentage = windowSize/originalSize * 100;
    // console.log(originalSize);
    // console.log(windowSize);
    // console.log(percentage);
    if(percentage > 80){
        body.className = "yello";
    }else if(percentage > 60){
        body.className = "purple";
    }else{
        body.className = "blue"
    }
}

console.dir(window);
window.addEventListener("resize",handleResize );