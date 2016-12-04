'use strict';

let wait = (delay, cb) => {
    console.log('waiting...');
    setTimeout(() => {
        console.log('done waiting');
        cb();
    }, delay);
};

let start = () => {
    console.log('Calling wait function');
    wait(1000, end);
};

let end = () => {
    console.log('Finished waiting');
};

start();