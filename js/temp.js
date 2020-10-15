'use strict';

let a =0;
for(let i = 2; i<=100; i++){

    if(i % 2){
        a = i;
        console.log( `${a} + '/ 1 и ${a}`);
    } else{
        console.log('составное');
    }  
}
