
//console.log(__dirname);
//console.log(__filename);

const fs = require('fs');
//模块中调用文件的路径相对是调用者所在的位置
//所以所有的文件操作必须是绝对路径
fs.readFile('C:/Users/Administrator/Desktop/web/node/01.txt', 'utf-8', (error, content) => {
    if(error) {
        throw error;
    }
    console.log(content);
})