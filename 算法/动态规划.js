// 动态规划解决
var arr = [2, 1], //5, 10, 25, 1
aim = 5;

function getRes(a, x) {
    // 初始化结果矩阵
    var result = [],
    m=0;
    while(m < a.length) {
        result[m] = [];
        var n = 0;
        while(n <= x) {
            result[m][n] = 0;
            n++;
        }
        m++;
    }
    // 构造结果矩阵
    a.forEach(function(value, i) {
        for(var j=0; j<=x; j++) {
            if(j % value === 0) {
                result[i][j] = 1;
            }
            var m = 0, temp = j;
            while(temp > 0 && i > 0) {
                result[i][j] += result[i-1][temp];
                temp = j - m * a[i];
                m++;
            }
        }
    });
    // 返回最终值
    return result/*[a.length-1][x-1]*/;
}
var start = Date.now();
//getRes(arr, aim);
console.log(getRes(arr, aim));
console.log((Date.now() - start) + 'ms');