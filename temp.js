var async = require('async');

async.reduceRight([1,2,3,4,5], 2, function (memo, item, callback) {
    console.log(item +' '+ memo);
    callback(null, item + memo);
}, function (err, result) {
    if(err){
        console.error(err);
    }
    console.log(result);
});





