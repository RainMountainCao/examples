//  0-n-1  H  T
// HHTHHH  3
var s = 'HHTHHH';
var arr = s.split(''),
    result = 0;
arr.forEach(function(value, index) {
    if(index === 0) {
        if(value !== arr[index+1]) {
            result++;
        }
    }else if(index === arr.length-1) {
        if(value !== arr[index-1]) {
            result++;
        }
    }else {
        if(value !== arr[index+1] || value !== arr[index-1]) {
            result++;
        }
    }
});
console.log(result);