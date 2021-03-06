var async = require('async');
var fs = require('fs');

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

//Task 2: parallel

//example passing function array

async.parallel([
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

], function (err, result) {
    if(err){
        console.error(err);
    }else{
        console.log(result);
    }
});
/* Result:
 function 3 called
 function 2 called
 function 1 called
 [ 'one', 'two', 'three' ]
 */

//example passing objects

async.parallel({
    one: function (callback) {
        setTimeout(function () {
            console.log('function 1 called');
            callback(null, 'one');
        }, 3000);
    },
    two: function (callback) {
        setTimeout(function () {
            console.log('function 2 called');
            callback(null, 'two');
        }, 2000);
    },
    three: function (callback) {
        setTimeout(function () {
            console.log('function 3 called');
            callback(null, 'three');
        }, 1000);
    }
}, function (err, result) {
    if(err)
    {
        console.error(err);
    }else{
        console.log(result);
    }
});
/* result:
function 3 called
function 2 called
function 1 called
{ three: 'three', two: 'two', one: 'one' } */


//example parallelLimit

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

//Task 3: waterfall

async.waterfall([
    function(callback) {
        setTimeout(function () {
            console.log('function 1 called');
            callback(null, 'one', 'two');
        }, 3000);

    },
    function(arg1, arg2, callback) {
        setTimeout(function () {
            console.log('function 2 called');
            callback(null, 'three');
        }, 2000);
        // arg1 now equals 'one' and arg2 now equals 'two'
        console.log(arg1 + ' '+ arg2);
    },
    function(arg1, callback) {
        setTimeout(function () {
            console.log('function 3 called');
            callback(null, 'done');
        }, 1000);
        // arg1 now equals 'three'
        console.log(arg1);
    }
], function (err, result) {
    // result now equals 'done'
    console.log(result);
});

/* Result:
 function 1 called
 one two
 function 2 called
 three
 function 3 called
 done
 */

//Task 4: Each, eachLimit, eachSeries

var arr = ['one', 'two', 'three'];

//each example

async.each(arr, function (item, callback) {
    console.log(item);
    callback();
}, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('done');
    }
} );

//eachSeries example
hugeArr =
    [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];
async.eachSeries(hugeArr, function (item, callback) {
    console.log(item.color + ' is ' + item.value);
    callback();
}, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('done');
    }
});

//eachLimit example

async.eachLimit(hugeArr,2, function (item, callback) {
        console.log(item.color + ' is '+ item.value);
        callback();
    },
    function (err) {
        if(err){
            console.log(err);
        }else {
            console.log('done');
        }
    } );

//Task 5: map, mapSeries, mapLimit

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

//Task 6: filter, filterSeries, filterLimit

arr = ['file1.json','file2.json','file3.json','file4.json', 'file5.json'];

async.filter(arr, function (file, callback) {
    fs.exists(file, function (exist) {
        console.log(exist);
        callback(exist);
    })

}, function (result) {
    console.log(result);
});

//Task 7: reduce, reduceRight

async.reduce([1,2,3,4,5], 2, function (memo, item, callback) {
    console.log(item +' '+ memo);
    callback(null, item + memo);
}, function (err, result) {
    if(err){
        console.error(err);
    }
    console.log(result);
});
/* Result:
 1 2
 2 3
 3 5
 4 8
 5 12
 17
 */

async.reduceRight([1,2,3,4,5], 2, function (memo, item, callback) {
    console.log(item +' '+ memo);
    callback(null, item + memo);
}, function (err, result) {
    if(err){
        console.error(err);
    }
    console.log(result);
});

/* Result
 5 2
 4 7
 3 11
 2 14
 1 16
 17
 */

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

//Task 9: sortBy

var arr = [ 1,2,7,4,5,8,9];

//tang dan

async.sortBy(arr, function (x, callback) {
    callback(null, x);
}, function (err, result) {
    console.log(result);
});

//giam dan

async.sortBy(arr, function (x, callback) {
    callback(null, -x);
}, function (err, result) {
    console.log(result);
});


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





