const printForm = document.querySelector("#print-form");
const rangeInput = document.querySelector("h2 #range-input");
const userInput = printForm.querySelector("#user-input");
const message1 = document.querySelector("#result #message1");
const message2 = document.querySelector("#result #message2");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  }

function onSubmit(event){
    event.preventDefault();
    const rightLimit = rangeInput.value;
    const chosen = parseInt(userInput.value);
    const machineChosen = getRandomIntInclusive(0,rightLimit);

    message1.innerHTML =`You chose: ${chosen}, the machine chose: ${machineChosen}`;
    
    if(chosen === machineChosen){
        //맞았을 때
        message2.innerHTML = `You Won!`
        
    }
    else if(chosen > rightLimit){
        message2.innerHTML=`Impossible!`
    }
    else {
        //틀렸을 때
        message2.innerHTML = `You Lose!`
    }

}

printForm.addEventListener("submit",onSubmit);

console.dir(userInput);
