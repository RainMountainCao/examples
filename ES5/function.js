/*
var a = 1,
b = function a(x) {
    x && a(--x);
};
console.log(a);       //1
*/
/*
function a(x) {
    return x;
}
var a;
console.log(typeof a);     //function
*/
/*
function a(x) {
    return x;
}
var a = 1;
console.log(typeof a);     //number
*/
/*
var a = 1;
function a(x) {
    x && a(--x);
};
console.log(typeof a);    //number
*/

/*var a = 1,
b = function a(x) {
    return x && a(--x);       //ie中a被1覆盖  会出错  其它浏览器a为函数本身
};
console.log(b(2));
*/
/*
function a(x) {
    return x * 2;
}
var a;
console.log(a);
*/
/*
function b(x, y, a) {
    arguments[2] = 10;
    console.log(a);
}
b(1, 2, 3);
*/
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2);








