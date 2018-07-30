console.log('-------------协程 数据交换-------------');

function* gen1(x) {
    var y = yield x + 2;
    return y;
}

var g1 = gen1(1);
console.log(g1.next());
console.log(g1.next(10));

console.log('-------------错误处理-------------');
function* gen2(x) {
    try {
        var y = yield x + 2;
    }catch(e) {
        console.log(e);
    }
    return y;
}
var g2 = gen2(1);
console.log(g2.next());
g2.throw("出错");

console.log('-------------Trunk函数转换器-------------');
var Trunk35 = function(fn) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return function(callbace) {
            args.push(callbace);
            return fn.apply(this, args);
        }
    }
}

const Trunk36 = function(fn) {
    return function(...args) {
        return function(cb) {
            return fn.call(this, ...args, cb);
        }
    }
}


console.log('-------------Trunkify模块-------------');
// npm install trunkify
var trunkify4 = require('thunkify');
var fs4 = require('fs');
var read5 = trunkify4(fs4.readFile);
// read('')(function(err, str){});

// 源码
function trunkifyCode(fn) {
    // fn 类似readFile
    return function() {
        // 一级闭包  参数转数组
        var args = new Array(arguments.length);
        var ctx = this;

        for(var i=0; i<args.length; i++) {
            args[i] = arguments[i];
        }

        // 二级闭包
        return function(done) {
            var called;

            args.push(function () {
                if(called) return;
                called = true;
                done.apply(null, arguments);
            });

            try {
                fn.apply(ctx, args);
            }catch (err) {
                done(err);
            }
        }
    }
}

console.log('-------------generator函数流程管理-------------');
/*
function* gen5() {

}
var g5 = gen5();
var res5 = g5.next();
// value done
while(!res5.done) {
    console.log(res5.value);
    res = g5.next();
}
*/
/*
var fs5 = require('fs');
var thunkify5 = require('thunify');
var readFileTrunk5 = thunkify5(fs5.readFile);

var gen5 = function* () {
    var r1 = yield readFileTrunk5('');
    console.log(r1.toString());
    var r2 = yield readFileTrunk5('');
    console.log(r2.toString());
}

var g5 = gen5();
var r1 = g5.next();
r1.value(function (err, data) {
    if(err) {
        throw err;
    }
    var r2 = g.next(data);
    r2.value(function (err, data) {
        if(err) {
            throw err;
        }
        g.next(data);
    })
});
*/

console.log('-------------thunk函数自动流程管理-------------');

// generator函数的自动执行器
function run6(fn) {
    var gen = fn();

    function next(err, data) {
        var result = gen.next(data);
        if(result.done) {  // 执行完了
            return;
        }
        next(result.value);  // 没执行完  继续
    }

    next();
}
function* g6() {
    // ...
    yield 3;
    yield 4;
    yield 5;
}

run6(g6);


console.log('-------------async函数的实现原理-------------');

function spawn(genF) {
    return new Promise(function(resolve, reject) {

        var gen = genF();

        function step(nextF) {
            try {
                var next = nextF();
            }catch(e) {
                return reject(e);
            }
            if(next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function(v) {
                step(function() {
                    return gen.next(v);
                }, function() {
                    return gen.throw(e);
                });
            });
        }

        step(function() {
            return gen.next(undefined);
        });
    });
}


function* gen30() {
    try {
        yield 1;
    }catch(e) {
        console.log('内部捕获');
    }
    yield 2;
    yield 3;
}
var g30 = gen30();
console.log(g30.next());
console.log(g30.throw());

console.log(g30.next());