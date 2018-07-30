const http = require('http');
const crypto = require('crypto');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, I am WebSocket server');
});
server.listen(3000, () => {
    console.log('port : 3000 bound')
});

// 监听协议转换事件
server.on('upgrade', (req, socket, upgradeHead) => {
    let head = new Buffer(upgradeHead.length);
    upgradeHead.copy(head);   // ???
    let key = req.headers['sec-websocket-key'];   // 得到客户端请求的key字段
    let shasum = crypto.createHash('sha1');
    key = shasum.update(key + '258EAFA5-47DA-95CA-C5AB0DC85B11').digest('base64');

    let headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        'Sec-WebSocket-Accept: ' + key,
        'Sec-WebSocket-Protocol: ' + protocol
    ];

    // 数据立即发送
    socket.setNoDelay(true);
    socket.write(headers.concat('', '').join('\r\n'));

    let websocket = new WebSocket();
    websocket.setSocket(socket);
    console.log('socket created!!!');
    websocket.onmessage(event => {
        console.log('客户端发来数据：' + event.data);
    });
});

// 客户端发送数据后，服务端在data事件中接收到编码数据，
// 解析为数据帧，再以数据侦格式，通过掩码将真正的数据解析出来





