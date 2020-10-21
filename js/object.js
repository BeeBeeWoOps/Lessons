'use strict';

let car = {
    model: 'mazda',
    year: 2006,
    turbocharging: true,
    specification: [],
    style:{
        color: 'blue'
    }
};

for (let key in car){
    console.log(' Ключ:' + key + ' Значение: ' + car[key]);
}
