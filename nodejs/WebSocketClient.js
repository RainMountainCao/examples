const crypto = require('crypto');
const http = require('http');
const url = require('url');
var parseUrl = url.parseUrl;

// node模拟浏览器
var WebSocket = function(url) {
    // paseUrl方法将url解析
    this.options = parseUrl(url);  // 错了
    this.connect();
};
WebSocket.prototype.onopen = function() {
    // ....
//    console.log('onopen可以')
};
WebSocket.prototype.setSocket = (socket) => {
    this.socket = socket;
    //websocket的数据帧协议是在底层data事件上封装完成的
    this.socket.on('data', this.receiver);
};
WebSocket.prototype.connect = () => {
    var that = this;  
    var key = new Buffer(this.options.protocolVersion + '-' + Date.now()).toString('base64');
    var shasum = crypto.createHash('sha1');
    var expected = shasum.update(key + '258EAFA5-47DA-95CA-C5AB0DC85B11').digest('base64');
    var options = {
        port: this.options.port,  //3000
        host: this.options.hostname,
        headers: {
            'Connection': 'Upgrade',
            'Upgrade': 'websocket',   // 用于触发server的upgrade事件  转换协议
            'Sec-WebSocket-Version': this.options.protocolVersion,
            'Sec-WebSocket-Key': key
        }
    }
    var req = http.request(options);
    req.end();
    req.on('upgrade', (res, socket, upgradeHead) => {
        // 连接成功
        that.setSocket(socket);
        // 连接websocket成功  触发onopen函数
        that.onopen();
    });
};
// 客户端生成websocket实例
const socket = new WebSocket('ws://127.0.0.1:3000');
// 建立连接成功的回调函数
socket.open = () => {
    setInterval(() => {     // 定时器50ms发一次数据
        if(socket.bufferedAmount == 0) {
            socket.send(getUpdateData());
        }
    }, 50);
};
socket.onmessage = event => {
    // event.data
    console.log('收到数据：' + event.data);
};