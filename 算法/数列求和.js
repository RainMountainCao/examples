var data = [['81', '4'], ['2', '2']];
for(var i=0; i<data.length; i++) {
    var n = parseInt(data[i][0]);   //80
    var m = parseInt(data[i][1]);   //4
    var add = n;
    for(var j=0; j<m-1; j++) {
        n = Math.sqrt(n);
        add += n;
    }
    console.log(add.toFixed(2));
}