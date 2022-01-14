body = document.body;

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