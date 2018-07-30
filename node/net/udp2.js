const dgram = require('dgram');
var message = new Buffer("node.js");
const client = dgram.createSocket("udp4");
client.send(message, 0, message.length, 2599, "localhost", (err, bytes) => {
    client.close();
});
