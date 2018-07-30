var client = require('./client');

// 右入栈
client.rpush('key1', 'a');
client.rpush('key1', 'b');
client.rpush('key1', 'c');
client.rpush('key1', 1);

// 左出栈 
client.lpop('key1', function(err, v) {
    console.log(v);
})

// 从0位置到倒数第一个位置
client.lrange('key1', 0, -1, function(err, v) {
    // 回调
    console.log(v);
});



