/*'use strict';

const http = require('http');

let count = 0;

const server = http.createServer((request, response) => {
    response.write(`你是第${++count}个访问的人！`);
    response.end();
});

server.listen(2080, (error) => {
    if(error)
        throw error;
    console.log("成功启动WEB服务，端口2080");
});
*/
/*
'use strict';

const http = require('http');

let count = 1;

const server = http.createServer((request, response) => {
    response.write(`time: ${count++}`);
    response.end();
});

server.listen(2080, (err) => {
    if(err)
        throw err;
    console.log("启动成功 端口2080");
});
*/

'use strict';

const http = require('http');
let count = 0;
const server = http.createServer((request, response) => {
    response.write(`time: ${++count}`);
    response.end();
});
server.listen(2080, (err) => {
    if(err)
        return err;
    console.log("2080端口开启");
});
