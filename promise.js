'use strict';

let wait = (delay) => {
    console.log('waiting...');
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                console.log('done waiting');
                resolve();
            }, delay);
        }
    );
};

let start = () => {
    console.log('Calling wait function');
    wait(1000).then(end);
};

let end = () => {
    console.log('Finished waiting');
};

start();