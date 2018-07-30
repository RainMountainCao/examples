const net = require('net');

var clients = [];
const server = net.createServer((socket) => {

    clients.push(socket);
    
    function broadcast(signal) {
        var username = signal.from;
        var message = signal.message;
        //广播消息
        var send = {
            procotol: signal.procotol,
            from: signal.from,
            message: signal.message
        };
        clients.forEach(client => {
            client.write(JSON.stringify(send));
        });
    }

    socket.on('data', (chunk) => {
        //console.log(chunk.toString());
        //socket.write("\n server > 你说啥？");
        // chunk: {"procotol": "p2p", "from": "张三", "to": "李四", "message": "你好"}
        try {
            var signal = JSON.parse(chunk.toString());   //转成json
            var procotol = signal.procotol;
            switch(procotol) {
                case "broadcast":
                    broadcast(signal);
                    break;
                default:
                    break;
            }
        }catch(err) {

        }
    });
    /*
    socket.on('drain', function() {
        console.log("服务器发送数据");
    });
    socket.on("end", function() {
        socket.write("disconnected");
    });
    socket.on('close', function() {
        console.log("socket全部关闭");
    });
    socket.on('timeout', function() {
        console.log("连接闲置，超时");
    });*/
    socket.write("welcome to cao's server!");
});
/*
//绑定端口后触发  优先于listen回调函数
server.on('listening', function(){
    console.log("端口绑定成功");
});
//客户端连接到服务器触发
server.on('connection', function(){
    console.log("客户端绑定成功");
});
//服务器关闭时触发
server.on('close', function() {});
//服务器异常时触发
server.on('error', function() {});
*/
server.listen(2599, function() {
    console.log("server bound");
});


/*
const net = require('net');
const chatServer = net.createServer();
chatServer.on("connection", function(client) {
    client.write("hello");
    client.end();
});
chatServer.listen(2599, function() {
    console.log("server bound");
});
*/