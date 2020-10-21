'use strict';

let expenses1,
    expenses2;

let number = function(n){
    return !isNaN(parseFloat(n)) ;
    };

    let money,
        start = function(){ // проверка входящих данных
            do{
             money = +prompt('Ваш месячный доход?');
            }
               while (!number(money));   //isNaN(parseFloat(money)))  //while(isNaN(money) || money.trim() === '' || money === null)
     };
    
    start();

let appData = { // создали объект который будет содержать все переменные нашего проекта
    income: {}, // дополнительные доходы
    addIncome:[],// будем перечислять дополнительные доходы
    expenses: {}, // дополнительные расходы
    addExpenses: [],// массив с возможными расходами
    depozit: false,
    mission: 50000,
    period: 3,
    asking: function(){// опрос пользователя
       let  addExpenses = prompt('Перечислите возможные расходы за расчитываемы период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(','); 
        // переносим все в нижний регистр и разбиваем на массив 
        //результат этой команды переносим в appData
        appData.depozit = confirm('Есть ли у Вас депозит в банке?')? 'Да':'Нет';
        let question; //для ввода вопроса о статье расходов
        let question2;// для ввода вопроса во сколько обойдется
        for(let i = 0; i<2; i++){  // цикл на вывод вопросов для ввода данных
            question = prompt('Введите обязательную статью расходов?');             
                   do{
                    question2 = +prompt('Во сколько это обойдётся ?');
                   }
                   while(isNaN(question2) ||  question2 === 0 );
                   
                   appData.expenses[question] = question2; // получаем  в наш объект ключ: значение
                   // квартплата: 5000
                }
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    
    getExpensesMonth: function(){// расчитываем сумму расходов
        for( let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
           
        }
    },

    getBudget: function(){  //высчитывает значения свойств budgetMonth и Day|общий бюджет за 1 месяц      
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },

    getTargetMonth: function(){ // фнкция которая рассчитывает период за который мы достигнем цели
       return Math.ceil(appData.mission / appData.budgetMonth);
     },
     getstatusIncome: function(){ // функция  которая показывает урвоень дохода
        if(appData.budgetDay >= 1200){
            return('У Вас высокий уровень дохода');
        } else if( 1200 > appData.budgetDay >= 600){
            return('У Вас средний уровень дохода');
        }else if(600 > appData.budgetDay >= 0){
            return('К сожалению, у Вас уровень дохода ниже среднего');
        }else if(appData.budgetDay <= 0 ){
            return('Что-то пошло не так!');
        }
        }
        
};
 
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Сумма всех расходов : ' + appData.expensesMonth);
console.log('Цель будет достигнута через  ' + appData.getTargetMonth() + ' месяцев');
console.log(' Уровень Вашго дохода ' + appData.getstatusIncome());

for( let key in appData){
    console.log(' Наша программа включает в себя: ' + key);
}







