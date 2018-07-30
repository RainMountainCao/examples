const dgram = require('dgram');

const client = dgram.createSocket('udp4');
/*
client.on('message', (msg, rinfo) => {
    console.log(mag);
})
*/
let message = new Buffer('udp server, 你好 ');
client.send(message, 0, message.length, 3000, 'localhost', (err, bytes) => {
    // 发完 调回调函数  关闭socket
    client.close();
});