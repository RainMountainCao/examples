const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.headers);
/*    var obj = {};
    for(var key in req) {
        obj[key] = req[key]
    }
*/
    res.setHeader('cookie', 'main=123')
    res.write('req');
    res.end();
});
server.listen(80, (err) => {
    if(err)
        throw err;
    console.log("http服务器创建成功: 2599端口");
});