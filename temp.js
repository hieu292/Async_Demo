var async = require('async');
var fs = require('fs');

//Task 8: detect, detectSeries, detectLimit

arr = ['file6.json','file7.json','file7.json','file4.json', 'file5.json'];

//detect example
async.detect(arr, function (file, callback) {
    fs.exists(file, function (exist) {
        callback(exist);
    });

}, function (result) {
    console.log(result);
});

//detectSeries example

async.detectSeries(arr, function (file, callback) {
    fs.exists(file, function (exist) {
        callback(exist);
    });

}, function (result) {
    console.log(result);
});

//detectLimit example

async.detectLimit(arr, 2, function (file, callback) {
    fs.exists(file, function (exist) {
        callback(exist);
    });

}, function (result) {
    console.log(result);
});





