//文件流
console.log("文件流：");
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

var data = '';
var streamReader = fs.createReadStream(path.join(__dirname, './传奇.lrc'));
streamReader.on('data', (chunk) => {
    //部分文件流
    console.log(iconv.decode(chunk, 'gbk'));
});
streamReader.on('end', () => {});