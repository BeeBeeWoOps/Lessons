'use strict';
let mission = 50000;

let money = prompt('Ваш месячный доход?');
console.log( 'Мой месячный доход ' + money );

let addExpenses = prompt('Перечислите возможные расходы за расчитываемы период через запятую');
console.log('Возможные расходы: ' + addExpenses.replace (/ /g, ','));

let depozit = confirm('Есть ли у Вас депозит в банке?')? 'Да':'Нет';
console.log(depozit);

let expensesItem1 = prompt('Введите обязательную статью расходов?'); 
console.log(expensesItem1);
let summ1 = prompt('Во всколько это обойдётся?');
console.log(summ1);

let expensesItem2 = console.log(prompt('Введите обязательную статью расходов?'));
console.log(expensesItem2);
let summ2 = prompt('Во сколько это обойдётся?');
console.log(summ2);

let budgetMonth = parseInt(money) - (parseInt(summ1) + parseInt(summ2));
console.log('Месячный бюджет: ' + budgetMonth);

let objective =  mission / budgetMonth;
console.log('Цель будет достигнута за: ' + Math.ceil(objective) + 'месяцев');  

let budgetDay =  + budgetMonth/30;
console.log('Дневной бюджет: ' + budgetDay);

if(budgetDay >= 1200){
    console.log('У Вас высокий уровень дохода');
} else if( 1200 > budgetDay >= 600){
    console.log('У Вас средний уровень дохода');
}else if(600 > budgetDay >= 0){
    console.log('К сожалению, у Вас уровень дохода ниже среднего');
}else if(budgetDay <= 0 ){
    console.log('Что-то пошло не так!');
}




