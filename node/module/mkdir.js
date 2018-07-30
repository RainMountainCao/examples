const fs = require('fs');
const path = require('path');

function mkdirs(pathname, callback) {
    pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname);
    var relativePath = path.relative(__dirname, pathname);
    var folders = relativePath.split(path.sep);
    var pre = "";
    folders.forEach(folder => {
        fs.mkdirSync(path.join(__dirname, pre, folder));
        pre = path.join(pre, folder);
    });
}
module.exports = mkdirs;