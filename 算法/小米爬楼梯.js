/*在你面前有一个n阶的楼梯，你一步只能上1阶或2阶。 
请问计算出你可以采用多少种不同的方式爬完这个楼梯。

输入
一个正整数（n <= 50），表示这个楼梯一共有多少阶
输出
一个正整数，表示有多少种不同的方式爬完这个楼梯
样例输入
5
样例输出
8
Hint
输入样例2
10
输出样例
89*/

var map = {};

function solution(n) {
    if(n in map) {
        return map[n];
    }
    if(n===0) {
        return 1;
    }else if(n===-1) {
        return 0;
    }
    var r1 = solution(n-1);
    var r2 = solution(n-2);
    map[n-1] = r1;
    map[n-2] = r2;
    return  r1 + r2;
}

    var res; 
      
    var _n = parseInt('10');
    res = solution(_n);
    console.log(res);