'use strict';

let wait = (delay) => {
    return new Promise((resolve, reject) => {
        if(isNaN(delay)){
            reject('Not a number');
        } else {
            console.log('waiting...');
            setTimeout(() => {
                resolve('done waiting');
            }, delay);
        }
    });
};

let start = () => {
    console.log('Calling wait function');
    wait(1000)
        .then((resp) => {
            console.log(resp);
            end();
        })
        .catch((err) => {
          console.log(err);  
        });
};

let end = () => {
    console.log('Finished waiting');
};

start();