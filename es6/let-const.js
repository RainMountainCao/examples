/*function test() {
    //let a=2;
    for(let i=1; i<3; i++) {
        console.log(i);
    }
    //console.log(i);
}
test();

function main() {
    //let a=2;
    for(var i=1; i<3; i++) {
        console.log(i);
    }
    console.log(i);
}
main();*/

//1
/*
function indexOf(arr, item) {
    //return arr.indexOf(item);
    return arr.findIndex(value => value === item);
}

console.log(indexOf([ 1, 2, 3, 4 ], 3));*/

function sum(arr) {
    //return eval(arr.join("+"));
    var sum = 0;
    for(let elem of arr.entries()) {
        sum += elem;
    }
    return sum;
}

console.log(sum([ 1, 2, 3, 4 ]));







