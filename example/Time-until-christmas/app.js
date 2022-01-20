const dayUntilX = document.querySelector("h2");



function getDate(){
    const date = new Date();
    const christmas = new Date(2022,11,25);

    const today = date.getTime();
    const target = christmas.getTime();
    
    const dDayInMs = target-today;
    
    const day = String(Math.floor(dDayInMs/(24*60*60*1000))).padStart(3,"0");
    const hours = String(Math.floor(dDayInMs%(24*60*60*1000)/(60*60*1000))).padStart(2,"0");
    const minutes = String(Math.floor(dDayInMs%(24*60*60*1000)%(60*60*1000)/(60*1000))).padStart(2,"0");
    const seconds = String(Math.floor(dDayInMs%(24*60*60*1000)%(60*60*1000)%(60*1000)/1000)).padStart(2,"0");
    dayUntilX.innerText =`${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getDate();
setInterval(getDate,"500");