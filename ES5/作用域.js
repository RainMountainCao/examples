var x = 10;
/*
// try...catch
try {
    var x = 20;
    throw new Error('fvds');
}catch(e) {
    console.log(x);
}

// with
var obj = {
    x: 30
};
with(obj) {
    console.log(x);
}
*/

// 函数
function fun() {
    console.log(this.x);
}
var obj2 = {
    fun: fun,
    x: 40
}

fun();
obj2.fun();
var fun2 = obj2.fun;
fun2();