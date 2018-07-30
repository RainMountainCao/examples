const fs = require('fs');
const path = require('path');
const mkdirs = require('./module/mkdir.js');

//fs.mkdir(path.join(__dirname, '创建文件夹测试'));

mkdirs(path.join(__dirname, './创建的新文件夹/文件夹'), (err) => {
    console.log("err");
});