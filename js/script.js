    'use strict';

let lang = prompt ('Введите en или ru');

if(lang === 'ru'){
    console.log('1.Понедельник.'+  '2. Вторник.' + 'Среда');
} else if(lang === 'en'){
    console.log('1.joisje' + ' 2. jdnij' +  '3. fjsoi');
}

switch(lang){
    case 'ru': 
    console.log('1.Понедельник.'+  '2. Вторник.' + 'Среда'); 
    break;

    case 'en':
    console.log('1.joisje' + ' 2. jdnij' +  '3. fjsoi');    
    break;

    default: console.log('Неверные значения!');

}

let array = new Map([
["ru", "Понедельник, вторник, среда"],
["en", "Monday, fkldf, dkopr"]
]);
console.log( array[lang]);

let myArray = {
    'ru': 'Понедельник, вторник, среда', 
    'en': 'Monday, kjdklf, hfseiu'  
}

console.log(myArray[lang]);

let namePerson = prompt('Введите имя ');


let result = console.log(namePerson === 'Артём'? 'Директор':'Студент');

let result1 =  console.log(namePerson === 'Максим'? 'Преподаватель':'Студент');