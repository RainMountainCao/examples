//文件操作
const fs = require('fs');
const path = require('path');

//测试 同步、异步
console.log("测试 同步、异步");
console.time('async');
fs.readFile(path.join(__dirname, './images/1.jpg'), (err) => {
    if(err) {
        throw error;
    }
});
console.timeEnd('async');

console.time("sync");
try {
    let img = fs.readFileSync(path.join(__dirname, './images/1.jpg'));
}catch(error) {
    throw error;
}
console.timeEnd("sync");

//文件读取
console.log("文件读取");
fs.readFile('./01.txt', (err, data) => {
   // console.log(data.toString('utf8'));
});

//buffer简单使用
console.log("buffer简单使用");
var buffer = new Buffer(7);
buffer.write("123456789");
console.log(buffer.toString('utf8', 2, 6));   //3456


//图片转base64
fs.readFile("./images/1.jpg", (err, data) => {
    if(err)
        throw err;
    //console.log(data.toString('base64'));
});

//歌词文件读取 之中文解码
console.log("歌词文件读取 之中文解码");
const iconv = require('iconv-lite');
fs.readFile(path.join(__dirname, './传奇.lrc'), (err, data) => {
    //console.log(iconv.decode(data, 'gbk'));
    //console.log(data);
    var lines = iconv.decode(data, 'gbk').split('\r\n');
    //console.log(lines[8]);
    var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
    //console.log(regex.test("[03:07.57]想你时你在天边"));
    var i=1000;
    lines.forEach((line) => {
        var matches = regex.exec(line);
        if(matches) {
            var m = parseFloat(matches[1]);
            var n = parseFloat(matches[2]);
            var f = parseFloat(matches[3]);
            var lyric = matches[4];
           /* setTimeout(() => {
                console.log(lyric);
            }, m*60*1000 + n*1000 + f);*/
        }else {
            //不是一行
            //console.log("不是标准行" + line);
        }
    });
});













