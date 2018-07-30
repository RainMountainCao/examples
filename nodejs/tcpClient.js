const net = require('net');
var client = net.connect({port: 2599}, (err) => {
    if(err)
        console.log('连接失败！');
    console.log('连接成功！');
    client.write('你好');
});

client.on('data', data => {
    console.log(data.toString());
    //client.write('是我发的！！！');
});

/*
const client = net.connect({port: 3000}, (err) => {
    if(err)
        console.log('出错了');
    console.log('client connectd');
    client.write('hello server');
});

client.on('data', (data) => {
    console.log(data);
    //client.end();
});

client.on('end', () => {
    console.log('server disconnected');
});*/