
var data = [['100', '120'],['300', '380']];
/*item = readline();
while(item) {
    data.push(item.split(' '));
    item = readline();
}*/
for (var i=0; i<data.length; i++) {
    var result = '';
    m = data[i][0];
    n = data[i][1];
    var x = m,
        flag = true;
    while(x <= n) {
        x = x + '';
        var r = Math.pow(x.charAt(0), 3) + Math.pow(x.charAt(1), 3) + Math.pow(x.charAt(2), 3);
        if(r == x) {
            if(flag) {
                result += x;
                flag = false;
            }else {
                result += ' ' + x;
            }   
        }
        x++;
    }
    if(flag) {
        console.log('no');
    }else {
        console.log(result);
    }
}