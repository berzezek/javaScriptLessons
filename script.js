'use strict';

let pay = +prompt("Ваш бюджет на месяц?"),

    timeDate = prompt("Введите дату", "YYYY-MM-DD");

let appData = {
    pay,
    budjet: 0,
    timeDate,
    expenses: {},
    optionalExpenses: {},
    imcome: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let firstQuestion = prompt("Введите обязятельную статью расходов"),
        secondQuestion = +prompt("Во сколько это обойдется?");

    if ( (firstQuestion !== null && secondQuestion !== null) && 
        (firstQuestion !== '' && secondQuestion !== '') && 
        (firstQuestion.length < 50 && secondQuestion < 10) ) {
        appData.expenses[firstQuestion] = secondQuestion;
    } else {

    }

}

appData.budjet = appData.pay;
console.log(appData.expenses);

alert(`Ваш бюджет на один день: ${appData.budjet / 30}`);