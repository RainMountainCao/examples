//var n = parseInt(readline());
var numbers = '7 13 4 246'.split(' ');
//根据最高位排 每两个都得比较一个大小出来 冒泡排序
for(var i=numbers.length-1; i>0; i--) {
    for(var j=i-1; j>=0; j--) {
        if(compare(numbers[j], numbers[i])) {    //前小于后  换
            var temp = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = temp;
        }
    }
}
console.log(numbers.join(''));
function compare(num1, num2) {
    //num1 < num2  true
    num1 = num1 + '';
    num2 = num2 + '';
    var i = 0;
    while(i < num1.length && i < num2.length) {
        if(num1.charAt(i) > num2.charAt(i)) {
            return false;
        }else if(num1.charAt(i) < num2.charAt(i)) {
            return true;
        }
        i++;
    }
    if(num1.charAt(0) < num2.charAt(i)) {
        return true;
    }else {
        return false;
    }
}
