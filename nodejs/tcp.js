/*const net = require('net');

const server = net.createServer(socket => {

    socket.on('data', data => {
        socket.write('Hello , 小曹');
    });

    socket.on('end', () => {
        console.log('服务器  断开');
    });

    socket.write('tcp实例*******************');

});

server.listen(3000, () => {
    console.log('--------server bound 3000--------');
});*/

const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => { //一端write  触发另一端data
        socket.write('你给我发消息了？？？');
        console.log(data.toString());
    });
    socket.on('drain', () => {   //一端write  自己触发drain
        console.log("服务器发送数据");
    });
    socket.on("end", () => {
        socket.write("disconnected");
    });
    socket.on('close', () => {
        console.log("socket全部关闭");
    });
    socket.on('timeout', () => {
        console.log("连接闲置，超时");
    })
    socket.write("server!");
});

//绑定端口后触发  优先于listen回调函数触发
server.on('listening', () => {});
//客户端连接到服务器触发  定义一个全局client数组存储客户信息
server.on('connection', (client) => {
    client.name = client.remoteAddress + ':' + client.remotePort;
    console.log('有人连接了');
});
//服务器关闭时触发
server.on('close', () => {});
//服务器异常时触发
server.on('error', () => {});

server.listen(2599, () => {
    console.log("server bound");
});