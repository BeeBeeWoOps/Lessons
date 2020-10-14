'use strict';

let lineOutput = function(a){

    if(!a.isNaN){
        
        alert('Данные введены некорректно!');
    }
    a = a.trim();

    if(a.length > 30){

        return a.substr(0,30) + '...';
    }
    
};

console.log(lineOutput('  вфо вфлвцд фцлвдлфцвв фцдллвжцфвбц'));