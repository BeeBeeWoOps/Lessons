'use strict';
let mission = 50000;

console.log('mission: ' + typeof mission);

let money = +prompt('Ваш месячный доход?');
console.log( 'Мой месячный доход ' + money );

let addExpenses = prompt('Перечислите возможные расходы за расчитываемы период через запятую');
console.log('Возможные расходы: ' + addExpenses.replace (/ /g, ','));

// let depozit = confirm('Есть ли у Вас депозит в банке?')? 'Да':'Нет';
// console.log(depozit);


let showTypeOf = function(data){ // функция показывающая тип данных переменных
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(addExpenses);



let expensesItem1 = prompt('Введите обязательную статью расходов?'), 
    summ1 = +prompt('Во всколько это обойдётся?'),
    expensesItem2 = prompt('Введите обязательную статью расходов?'),
    summ2 = +prompt('Во сколько это обойдётся?');



let getExpensesMonth = function(summ1, summ2){ // функция возвращает сумму всех обязательных расходов
    return summ2+summ1;
};

console.log(getExpensesMonth(summ1, summ2));


const getAccumulatedMonth = function(a){  
return a - getExpensesMonth(summ1, summ2);
};

getAccumulatedMonth(money, getExpensesMonth(summ1, summ2));

let accumulatedMonth = +getAccumulatedMonth(money, getExpensesMonth(summ1, summ2));// помещаем в переменную функцию которая вычисляет накопления

let getTargetMonth = function(a, b){ // фнкция которая рассчитывает период за который мы достигнем цели
    return a / b;
 };
 
 console.log('Цель будет достигнута ' + getTargetMonth(mission, accumulatedMonth));

let budgetDay =   accumulatedMonth/30; //вычисляем дневной доход
console.log('Дневной бюджет: ' + budgetDay);


let getstatusIncome = function(){ // функция  которая показывает урвоень дохода
    if(budgetDay >= 1200){
        return('У Вас высокий уровень дохода');
    } else if( 1200 > budgetDay >= 600){
        return('У Вас средний уровень дохода');
    }else if(600 > budgetDay >= 0){
        return('К сожалению, у Вас уровень дохода ниже среднего');
    }else if(budgetDay <= 0 ){
        return('Что-то пошло не так!');
    }
    };
    

console.log(getstatusIncome());







// let budgetMonth = parseInt(money) - (parseInt(summ1) + parseInt(summ2));
// console.log('Месячный бюджет: ' + budgetMonth);

// let objective =  mission / budgetMonth;
// console.log('Цель будет достигнута за: ' + Math.ceil(objective) + 'месяцев');  









