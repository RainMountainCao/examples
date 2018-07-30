console.log('--------------------------例子一：给普通对象加遍历接口 ------------------------------');
function* objectEntries1(obj) {
    let propKeys = Reflect.ownKeys(obj);
    for(let propKey of propKeys) {
        yield [propKey, obj[propKey]]
    }
}
let obj1 = {first: '魏洲', last: '许许'};
for(let [key, value] of objectEntries1(obj1)) {
    console.log(`${key}:${value}`);
}
//方法2
function* objectEntries11() {
    for(let key of Object.keys(this)) {
        yield [key, this[key]];
    }
}
obj1[Symbol.iterator] = objectEntries11;
for(let [key, value] of obj1) {
    console.log(`${key}:${value}`);
}

console.log('--------------------------例子二：throw抛错 ------------------------------');
var g2 = function* () {
    try {
        yield;
    }catch(e) {
        console.log('内部捕获', e);
    }
}
var i = g2();
i.next();

try {
    i.throw('a');     //连续两次抛错  内部捕获一次  抛向外部
    i.throw('b');
}catch(e) {
    console.log('外部捕获', e);
}

// 遍历器内部throw能被内部捕获   但外部只能被函数块外部捕获
// 只捕获一次a  外部throw一次  不再继续执行try
// 内部未部署try  抛向外部
// 内部未部署try/catch  抛错会终止遍历 
// 外部抛错  不影响遍历