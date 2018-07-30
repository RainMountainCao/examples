//文件写入  3种
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const readline = require('readline');

//1异步
/*fs.writeFile(path.join(__dirname, "./test1.txt"), "123456",(err) => {
    if(err) 
        throw err;
});*/

//2同步
/*try {
    fs.writeFileSync(path.join(__dirname, "./test1.txt"), "555");
}catch(e) {
    throw e;
}
*/

//3流
var streamWritter = fs.createWriteStream(path.join(__dirname, "./test1.txt"));
setInterval(() => {
    streamWritter.write("hello\r\n", () => {
        console.log("+1");
    });
}, 1000);
