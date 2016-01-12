var async = require('async');

async.parallelLimit([
    function (callback) {
        setTimeout(function () {
            console.log('function 1 called');
            callback(null, 'one');
        }, 3000);

    },
    function (callback) {
        setTimeout(function () {
            console.log('function 2 called');
            callback(null, 'two');
        }, 2000);
    },
    function (callback) {
        setTimeout(function () {
            console.log('function 3 called');
            callback(null, 'three');
        }, 1000);
    }

],2, function (err, result) {
    if(err){
        console.error(err);
    }else{
        console.log(result);
    }
});
