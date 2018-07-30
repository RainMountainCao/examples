// a  b
// 移除a中的一些*
// 子序列字典序最大
var s = 'test',
    th = s.length,
    res,
    maxstr = '';

/*var subs = getSubs('',s);
function getSubs(left, right) {
    if(right === '') {
        return [left];
    }
    if(left < maxstr) {
        return [];
    }
    var res = [];
    var cur = right.charAt(0);
    var right = right.substring(1);
    var leftSpace = getSubs(left, right);
    var rightSpace = getSubs(left+cur, right);
    maxstr = left+cur;
    res = res.concat(leftSpace).concat(rightSpace);
    return res;
}

// 计算字典序
subs = subs.sort(function(a,b) {
    if(a>b) {
        return -1;
    }else if(a<b) {
        return 1;
    }else {
        return 0;
    }
});
console.log(subs[0]);*/

var arr = s.split('');
var result = arr.sort(function(a,b) {
    if(a>b) {
        return -1;
    }else if(a<b) {
        return 1;
    }else {
        return 0;
    }
});
console.log(result);
var i=0
    res = result[i];
while(result[i] === result[i+1]) {
    i++;
    res += result[i]
}
console.log(res);