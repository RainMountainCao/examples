const http = require('http');
const crypto = require('crypto');
const server = http.createServer(function(req, res) {
    res.writeHead('200', {'Content-Type': 'text/plain'});
    res.end('hello');
});
server.listen('12010');

let WebSocket = function(url) {
    this.options = parseUrl(url);
    this.connect();
};
WebSocket.prototype.openen = function() {

};
WebSocket.prototype.setSocket = function() {
    var that = this;
    var key = new Buffer(this.options.protocolVersion + '-' + Date.now()).toString('base64');
    var shasum = crypto.createHash('sha1');
}



server.on('upgrade', function(req, socket, upgradeHead) {
    let head = new Buffer(upgradeHead.length);
    upgradeHead.copy(head);
    let key = req.head['sec-websocket-key'];
    let shasum = crypto.createHash('sha1');
    key = shasum.update(key+'258').digest('base64');
    let headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        'Sec-WebSocket-Accept: ' + key,
        'Sec-WebSocket-Protocol: ' + protocol
    ];
    socket.setNoDelay(true);
    socket.write(header.concat('', '').join('\r\n'));
    // 建立服务器端websocket连接
    const websocket = new WebSocket();
    websocket.setSocket(socket);
});
