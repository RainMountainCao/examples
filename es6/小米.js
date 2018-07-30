setTimeout(function() {
    console.log('start');
    new Promise(function(resolve, reject) {
        resolve(true);   // 加入任务队列
        reject(false);   // 加入任务队列
        console.log(1);  // 加入任务队列
    }).then(function(){
        setTimeout('var a=2; console.log(2)');
        console.log(10);
    }, function() {
        setTimeout('var a=3; console.log(3)');
        console.log(11);
    }).then(function(){
        console.log(4);
    }, function() {
        console.log(5);
    }).catch(function() {
        console.log(6);
    });
}, 0);

setTimeout(function() {
    const timer = setInterval(function() {
        console.log(7);
    }, 10);      // timer 加入任务队列
    const start = Date.now();
    setTimeout(function() {
        while (Date.now-start <= 30) {}
        clearTimeout(timer);
        try {
            console.log(x);
        }catch(e) {
            console.log(8);
        }
    }, 13);
}, 0);

console.log('end');

// 最外层两个setTimeout加入任务队列后  执行打印end
// 此时任务队列是  setTimeout   setTimeout

// 接下来第一个setTimeout出队 
// 打印start  Promise的回调方法入队 打印1
// 此时任务队列 setTimeout resolve()  reject()

// 此时第二个setTimeout出队 注册10ms后timer入队
// 第二个内部的13ms setTimeout 13ms都入队
// 此时任务队列 resolve()  reject() setTimeout(10) setTimeout(13)

// resolve()出队 执行了resove就不再执行reject
// resolve()内部的setTimeout()出错
// 进入resole函数的reject回调 打印5
// 此时任务队列 setTimeout(10) setTimeout(13)

// setTimeout(10)出队  打印7
// setTimeout(13)出队  打印x报错  打印8