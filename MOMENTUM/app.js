const age = parseInt(prompt("몇살이십니까?"));

if (isNaN(age)) {
    console.log("다시 입력하세요.");
} else{
    console.log("굿");
}