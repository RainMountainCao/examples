var arr = 'hello xiao mi'.split(' ');
/*arr.forEach(function(value, index) {
    var a = arr.length-index;
    arr.splice(a, 0, arr[0]);
    arr.shift();
    console.log(value+ ' ' +index + ' ' + arr.length);
    //arr.splice();
});*/
/*for(var index=0; index<arr.length; index++) {
    arr.splice(arr.length-index, 0, arr[0]);
    arr.shift();
};*/
var arr1 = [];
for(var i=0, len=arr.length; i<len; i++) {
    arr1.push(arr.pop());
}
console.log(arr1.join(' '));
//console.log(arr.join(' '));