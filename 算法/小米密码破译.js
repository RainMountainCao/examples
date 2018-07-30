/*
将数字转换为字母，1转化为a，2转化为b，依此类推，26转
化为z。现在输入的密码是一串数字，输出的破译结果是该数
字串通过转换规则所能产生的所有字符串。
输入
多行数据，每行为一个数字串。
输出
多行数据，每行对应输出通过数字串破译得到的所有字符串，
并按照字符串顺序排列，字符串之间用
单个空格分隔。每行开头和结尾不允许有多余的空格。
样例输入
1
12
123
样例输出
a
ab l
abc aw lc
*/
var data = ['1', '12', '123'];
function func(left, str) {
    if(str === '') {
        return left+'#';
    }
    var res = '';
    var cur = str.charAt(0);
    var str = str.substring(1);
    res += func(left+cur+' ', str);
    if(str !== '') {
        res += func(left+cur, str);
    }
    return res;
}
// 解析字符串输出
// 123
// 1 2 3 #1 23 #12 3
for(var i=0; i<data.length; i++) {
    var s = func('', data[i]);
    var res = s.split('#');
    res.splice(res.length-1, 1);
    var print = '';
    for(var j=0; j<res.length; j++) {
        var res2 = res[j].split(' ');
        res2.splice(res2.length-1);
        for(var m=0; m<res2.length; m++) {
            if(parseInt(res2[m])>26) {
                continue;
            }
            print+=String.fromCharCode(parseInt(res2[m])+96);
        }
        print+=' ';
    }
    console.log(print);
}

