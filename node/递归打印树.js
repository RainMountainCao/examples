const fs = require('fs');
const path = require('path');

var target = process.argv[2] ? path.join(__dirname, process.argv[2].toString()) : './';

try {
    var dirinfos = fs.readdirSync(target);
    var dirs = [],
        files = [];
    dirinfos.forEach(info => {
        var stats = fs.statSync(path.join(target, info));
        if(stats.isFile) {
            files.push(info);
        }else {
            dirs.push(info);
        }
    });
}catch(err) {
    throw err;
}
files.forEach(file => {
    console.log(file);
});
dirs.forEach(dir => {
    console.log(dir);
});