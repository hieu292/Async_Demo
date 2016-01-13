var async = require('async');
var fs = require('fs');


//Task 10: concat

arr = ['file1.json','file2.json','file3.json','file4.json'];

async.concat(arr, function (file, callback) {
    fs.readFile(file, function (err, data) {
        if(err){
            console.error(err);
        }
        if(data != ''){
            callback(null, data);
        } else {
            console.log('Have a blank file, you should check it');
        }
    });
}, function (err, result) {
    if(err){
        console.log(err);
    }else {
        console.log(result.toString('utf8'));
    }
});