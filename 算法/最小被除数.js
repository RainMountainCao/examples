var s = '6';

var n = parseInt(s),
    j = 2 * n,
    arr = [];
for(var m=2; m<n; m++) {
    arr.push(m);
}

while(true) {
    var flag = true;

    for(var i=1; i<=arr.length; i++) {
        if(j % arr[arr.length-i] !== 0) {
            flag = false;
            break;
        } else {
            arr.splice(arr.length-i, 1);
            i--;
        }
    }

    if(flag) {
        break;
    }else {
        j += n;
        continue;
    }
}

console.log(j%987654321);