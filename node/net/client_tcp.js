const net = require('net');
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your name?', (name) => {
    name = name.trim();
    if(!name) {
        throw new Error("无名");
    }
    const socket = net.connect({port: 2599}, () => {
        //console.log("client connected");
        process.stdin.on('data', (chunk) => {
            //socket.write(chunk.toString().trim());
            //process.stdout.write(`\nclient >`);
            var send = {
                "procotol": "broadcast", 
                "from": "张三", 
                "to": "李四", 
                "message": "你好"
            }
            rl.setPrompt(name + ">");
            rl.on('line', (line) => {
                rl.write(JSON.stringify(send));
                rl.prompt();
            }).on('close', () => {
        
            });
        });
       
    
    });
    socket.on('data', (data) => {
        console.log("\n" + data.toString().trim());
    });
    
    
});


/*
socket.on('end', () => {
    console.log('client disconnected');
});
*/