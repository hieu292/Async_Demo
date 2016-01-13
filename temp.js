var async = require('async');
var fs = require('fs');

arr = ['file1.json','file2.json','file3.json','file4.json'];
async.map(arr, function (file, callback) {
    fs.readFile(file, function (err, data) {
        if(err) throw err;
        if(data != ''){
            callback(null, data);
        } else {
            console.log('Have a blank file, you should check it');
        }
    })
    }, function (err, result) {
    if(err){
        console.log(err);
    }else {
        console.log(result.toString('utf8'));
    }
    }

);

