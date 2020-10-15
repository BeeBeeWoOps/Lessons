'use strict';

let arr = ['2332', '33232', '423232', '413232', '5', '6', '8'];

let consoleMass = function(){
    

    for( let i = 0; i<arr.length; i++){
        if(arr[i].substr(0,1) === '2' || arr[i].substr(0,1) === '4'){ // slice тоже можно использовать
            console.log(arr[i]);
        }
    }
};
//     arr.forEach(i => {
      
//         if(i.startsWith('2') || i.startsWith('4')){
//             console.log(i);
//         } 
//     });
// };
consoleMass();
