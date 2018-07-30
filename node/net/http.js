const http = require('http');
const server = http.createServer((req, res) => {
    res.write("hello");
    res.end();
});
server.listen(2599, (err) => {
    if(err)
        throw err;
    console.log("http服务器创建成功: 2599端口");
});