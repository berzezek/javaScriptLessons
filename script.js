'use strict';

let pay = +prompt("Ваш бюджет на месяц?");

let timeDate = prompt("Введите дату", "YYYY-MM-DD");

let firstQuestion = prompt("Введите обязятельную статью расходов");
let secondQuestion = +prompt("Во сколько это обойдется?");

let firstQuestion1 = prompt("Введите обязятельную статью расходов");
let secondQuestion1 = +prompt("Во сколько это обойдется?");

let expenses = {
    firstQuestion: secondQuestion,
    firstQuestion1: secondQuestion1
};

let appData = {
    timeDate,
    expenses,
    optionalExpenses: 0,
    imcome: 0,
    savings: false
};

let budjet = pay - (secondQuestion + secondQuestion1);

alert(`Ваш бюджет на один день: ${budjet / 30}`);