const fs = require('fs');

function main(fsname) {
    fs.readFile(fsname, (err, data) => {
        if(err) {
            console.log('err');
        }else {
            console.log('成功');
        }
    });
}

module.exports = {
    main
}