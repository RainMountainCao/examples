var arr = [5, 10 , 25], //, 1
    aim = 2000;

function getRes(a, x) {
    if(a.length === 0 || x <= 0) {      // 最深递归的返回
        return 0;
    }
    var res = 0;
    //for(var i=0, len=a.length; i<len; i++) {    //  处理 5      // 5 从0到200
        var m = 0,        // 5的个数
            temp = x;
        while(temp > 0) {        // 1000
            temp = x - a[0] * m++;   // 0个5  1个5
            res += getRes(a.slice(1), temp);  // 处理后续  [10, 25, 1]
        }
        if(temp===0) {
            res++;
        }
    //}
    return res;
}
var start = Date.now();
console.log(getRes(arr, aim));
console.log((Date.now() - start) + 'ms');