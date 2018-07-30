//打印目录
const fs = require('fs');
const path = require('path');

//得到传入参数
var target = process.argv[2] ? path.join(__dirname, process.argv[2].toString()) : './';

fs.readdir(target, (err, files) => {
    files.forEach(file => {
        //console.log(path.join(target, file));
/*        fs.stat(path.join(target, file), (err, states) => {
            console.log(`${dateFormat(states.mtime, "yyyy/MM/dd hh:mm")}\t${states.size}\t${file}`);
        });*/
        fs.stat(path.join(target, file), (err, stats) => {
            console.log(`${dateFormat(stats.mtime, 'yyyy/MM/dd')}\t${stats.size}\t${file}`);
        });
    });
});
function dateFormat(date,format) {
    var o = {
        "M+" : date.getMonth()+1, //month
        "d+" : date.getDate(),    //day
        "h+" : date.getHours(),   //hour
        "m+" : date.getMinutes(), //minute
        "s+" : date.getSeconds(), //second
        "q+" : Math.floor((date.getMonth()+3)/3),  //quarter
        "S" : date.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
            (date.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
                RegExp.$1.length==1? o[k] :
                        ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}
