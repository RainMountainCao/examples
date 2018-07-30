/*输入
仅包含数字的字符串
输出
所有可能的IP，每行输出一个IP。
若无法转换为任何IP，则不用输出任何字符串。
样例输入
2119913227
样例输出
21.199.13.227
21.199.132.27
211.99.13.227
211.99.132.27

Hint
以下是不合法的IP
0.1.2.3
1.00.2.2
1.01.1.1
900.256.121.321
*/

// 小于256 不能0开头  
// A类    255.0.0.0       1.0.0.0    127.255.255.255
// B      255.255.0.0     128.0.0.0  191.255.255.255
// C      255.255.255.0   192.0.0.0  223.255.255.255

var data = '2119913227';

function func(left, right, flag) {
    if(flag === 3) {
        if(right.length <= 3 && right.length > 0) {
            return left + right + '#';
        }else {
            return '';
        }
    }
    if(right === '') {
        return '';
    }
    var res = '';
    var cur = right.charAt(0);
    var str = right.substring(1);
    res += func(left+cur+'.', str, flag+1);
    res += func(left+cur, str, flag);
    return res;
}
var result = func('', data, 0);
var arr = result.split('#');
for(var i=0; i<arr.length; i++) {
    var arr2 = arr[i].split('.');
    var flag = true;
    for(var j=0; j<arr2.length; j++) {
        if(arr2[j].indexOf(0) == '0' && arr2[j].length > 1) {
            flag = false;
        }
        if(j===0 && arr[j] ==='0') {
            flag = false
        }
        if(parseInt(arr2[j]) < 0 || parseInt(arr2[j]) > 255) {
            flag = false;
        }
    }
    if(flag) {
        console.log(arr[i]);
    }
}