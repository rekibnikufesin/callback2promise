'use strict';

let wait = (delay, cb) => {
    if (isNaN(delay)) {
        cb('Not a number!');
    } else {
        console.log('waiting...');
        setTimeout(() => {
            console.log('done waiting');
            cb(null, 'Finished waiting');
        }, delay);
    }
};

let start = () => {
    console.log('Calling wait function');
    wait(1000, end);
};

let end = (err, resp) => {
    if (err) {
        console.log(err);
    } else {
        console.log(resp);
    }
};

start();