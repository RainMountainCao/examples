var arr = [5, 10, 25], //, 1
    aim = 2000,
    map = {};

function getRes(a, x) {
    // 判断是否记忆保存
    if((a+''+x) in map) {
        return map[a+''+x];
    }
    if(a.length === 0 || x <= 0) {  // 最深递归的返回
        return 0;
    }
    var res = 0;
    var m = 0,        // 5的个数
        temp = x;
    while(temp > 0) {        // 1000
        temp = x - a[0] * m++;   // 0个5  1个5
        var r = getRes(a.slice(1), temp);  // 处理后续  [10, 25, 1]
        map[a.slice(1)+''+temp] = r;    // 保存递归结果
        res += r;
    }
    if(temp===0) {
        res++;
    }
    return res;
}
var start = Date.now();
console.log(getRes(arr, aim));
console.log((Date.now() - start) + 'ms');
