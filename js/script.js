'use strict';

let number = function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
};
let money,
    addExpenses = prompt('Перечислите возможные расходы за расчитываемы период через запятую'),
    depozit = confirm('Есть ли у Вас депозит в банке?')? 'Да':'Нет',
    mission = 50000,
    expenses = [],
    sum = [];
    
let start = function(){ // проверка входящих данных
    do{
    money = +prompt('Ваш месячный доход?');
    }
        while (!number(money));   //isNaN(parseFloat(money)))  //while(isNaN(money) || money.trim() === '' || money === null)
};

start();

let showTypeOf = function(data){ // функция показывающая тип данных переменных
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(addExpenses);


let getExpensesMonth = function(){ // функция возвращает сумму всех обязательных расходов
   
    for(let i = 0; i<2; i++){
        expenses[i] = prompt('Введите обязательную статью расходов?');   
        sum += +prompt('Во сколько это обойдётся ?');              
    
   console.log( sum);
   return sum;
}
};

let expressesAmount = +getExpensesMonth();
console.log('Paсходы за месяц: ' + expressesAmount );

let getAccumulatedMonth = function(a){  //бюджет на месяц
return a - expressesAmount;
};

getAccumulatedMonth(money, expressesAmount);

let accumulatedMonth = +getAccumulatedMonth(money, expressesAmount);//в переменной функция которая вычисляет накопл

let getTargetMonth = function(a, b){ // фнкция которая рассчитывает период за который мы достигнем цели
    let sub = 0;
    sub = a/b;
   
    if(sub < 0 ){
        alert(`Цель не будет достигнута!`);
    } 
    return sub;
 };
 if (getTargetMonth(mission, accumulatedMonth)>0) {
     alert( 'Цель будет достигнута через : ' + getTargetMonth(mission, accumulatedMonth));
 }

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









