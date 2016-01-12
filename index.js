var async = require('async');

//Task 1: series

//example passing function array

async.series([
    function (callback) {
        setTimeout(function () {
            console.log('Func 1 called');
            callback(null, 'one');
        }, 3000);

    },
    function (callback) {
        setTimeout(function () {
            console.log('Func 2 called');
            callback(null, 'two');
        }, 2000);

    },
    function (callback) {
        setTimeout(function () {
            console.log('Func 3 called');
            callback(null, 'three');

        }, 1000);

    }
], function (err, result) {
    console.log(result);
});

//example passing objects

async.series(
    {
        one: function (callback) {
            setTimeout(function () {
                console.log('function one');
                callback(null, 1);
            }, 3000);
        },
        two: function (callback) {
            setTimeout(function () {
                console.log('function two');
                callback(null, 2);
            }, 2000);
        }
    }, function (err, result) {
        if(err)
        {
            console.error(err);
        }else{
            console.log(result);
        }
    }

);