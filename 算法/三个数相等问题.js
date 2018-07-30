//  X Y Z
//  选两个数  都加一
//  选一个数  加2
var data = '2 5 4'.split(' ');
var x = parseInt(data[0]),
    y = parseInt(data[1]),
    z = parseInt(data[2]);
// 最小的加2
// 两个小的相等  累计差额
// 两个大的相等  小的加2
var n = 0;
while((x!== y) || (y !== z) || (x !== z)) {
    // 取最小值
    var min = getMin(x, y, z);
    if((x===min&&y===min) || (x===min&&z===min) || (y===min&&z===min)) {
        n += x-min;   // x最小值  0
        n += y-min;   // y最小值  0
        n += z-min;   // z最大值  z-min
        break;
    }else {
        if(x===min) {
            x+=2;
        }
        if(y===min) {
            y+=2;
        }
        if(z===min) {
            z+=2;
        }
        n++;
    }
}
console.log(n);

function getMin(x, y, z) {
    var min = x;
    if(y < min) {
        min = y;
    }
    if(z < min) {
        min = z;
    }
    return min;
}
