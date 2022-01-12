const calculator = {
    plus: function (a,b) {
        return a+b;
    },
    minus: function (a,b) {
        return a-b;
    },
    times: function (a,b) {
        return a*b;
    },
    divide: function (a,b) {
        return a / b;
    },
    power: function (a,b) {
        return a ** b;
    },
}

console.log(calculator.plus(2,3));
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.power(minusResult,-3);

console.log(plusResult,minusResult,timesResult);