// ABCBA  AA  A
// s  构造回文串   空不回文
// XXY   4
var s = 'XXY',
    map = {};    // 记录递归结果

function fun(left,right) {
    if((left+'#'+right) in map) {
        return map[left+'#'+right];
    }
    if(right === '') {
        if(isHuiwen(left)) {
            return 1;
        } else {
            return 0;
        }
    }
    var cur = right.charAt(0);    // X
    var str = right.substring(1); // XY
    
    var l = fun(left, str);
    var r =  fun(left+cur, str);
    map[left + '#' + str] = l;
    map[left + cur + '#' + str] = r;

    return l+r;
}


//判断回文
function isHuiwen(s) {
    if(s==='') {
        return false;
    }
    for(var i=0; i<s.length/2; i++) {
        if(s.charAt(i) !== s.charAt(s.length-1-i)) {
            return false;
        }
    }
    return true;
}

console.log(fun('', s));