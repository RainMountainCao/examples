//典例1
/*Number.prototype.plus = function(value) {
    return this.valueOf() + value;
}
Number.prototype.minus = function(value) {
    return this.valueOf() - value;
}
var a = (5).plus(3).minus(6); //2
console.log(a);
*/
// 典例2
/*
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

var a = add(2)(3)(4); //9
console.log(a);
*/
// 典例3  利用JavaScript打印出Fibonacci数（不使用全局变量）
/*
    function Fibonacci(a, b) {
        var x=0, y=1, index=a;
        return function() {
            while(index <= b) {
                if(index == 0) {
                    console.log(0);
                }else if(index == 1) {
                    console.log(1);
                }else{
                    console.log(x+y);
                    var temp = x;
                    x = y;
                    y = temp + y;
                }
                index++;
            }
        }
    }
Fibonacci(0, 5)();  // 打印第五个到第20个
*/

// 典例4  给object数组进行排序（排序条件是每个元素对象的属性个数）

// 典例5  转化一个数字数组为function数组（每个function都弹出相应的数字）
/*
var arr = [5, 7, 9, 2, 0, 4, 7, 6, 3];
function revert(arr) {
    var result = [];
    arr.forEach(function(value) {
        result.push(function(){
            return value;
        });
    });
    return result;
}
arr = revert(arr);
console.log(arr[6]());
*/
// 典例6  找出数字数组中最大的元素（使用Match.max函数）
// 典例7  深复制
// 典例8  json序列化与反序列化
// class类名封装

    var n = 3;
    var a = '2 7 4'.split(' ');

    for(var i=n; i>0; i--) {
        for(var j=i-1; j>=0; j--) {
            if(a[i] < a[j]) {
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
        var niu = 0,
            yang = 0;
        var flag = true;
    while(a.length) {
        if(flag) {
            niu += parseInt(a.pop());
            flag = false;
        }else {
            yang += parseInt(a.pop());
            flag = true;
        }
    }
    console.log(niu - yang);





