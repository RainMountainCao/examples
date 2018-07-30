console.log('-----------------------例子一： 模拟next返回----------------------------------------------');
let it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(arr) {
    let index = 0;
    return {
        next: function() {
            return index < arr.length ? 
                {value: arr[index++], done: false} : 
                {value: undefined, done: true};
        }
    };
}

console.log('-------------------------例子二： 模拟next返回（省略undefined项）----------------------------------------------');
let it2 = makeIterator2(['a', 'b']);

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

function makeIterator2(arr) {
    let index = 0;
    return {
        next: function() {
            return index < arr.length ? 
                {value: arr[index++]} : 
                {done: true};
        }
    };
}

console.log('----------------------例子三： 无限运行的遍历器对象----------------------------------------------');
function makeIterator3() {
    let nextIndex = 0;
    return {
        next: function() {
            return {value: nextIndex++, done: false};
        }
    };
}
let i3 = makeIterator3();
console.log(i3.next());
console.log(i3.next());
console.log(i3.next());

console.log('------------------------例子四： 原生iterator接口（对象Symbol.iterator）--------------------------------');
const obj4 = {
    [Symbol.iterator]: function() {
        var nextIndex = 0;
        return {
            next: function() {
                return {
                    value: nextIndex++,
                    done: false
                }
            }
        }
    }
};
let iter4 = obj4[Symbol.iterator]();
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());

console.log('--------------------------例子五： 原生iterator接口（数组Symbol.iterator）-------------------------------------');
let arr = ['a', 'b', 'c'];
let iter5 = arr[Symbol.iterator]();    //得到Symbol.iterator接口
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());

console.log('--------------------------例子六： 类部署iterator接口（对象Symbol.iterator）------------------------------');
class RangeIterator6 {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator]() {
        return this;      //返回this可调用本calss中的next方法
    }

    next() {
        let value = this.value;
        if(value < this.stop) {
            this.value++;
            return {done: false, value: value};
        }
        return {done: true, value: undefined};
    }

}

function range(start, stop) {
    return new RangeIterator6(start, stop);
}

for(let value of range(0, 3)) {
    console.log(value);
}

console.log('--------------------------例子七： 遍历器实现指针结构的例子 ------------------------------');

function Obj(value) {
    this.value = value;
    this.next = null;
}

Object.prototype[Symbol.iterator] = function() {  // 给原生Object加Symbol.iterator接口
    let iterator = {next: next};                  // 遍历时  调此接口的next方法  
    let current = this;                           // next方法中  遍历元素之间的关系类似链表
    function next() {                             // 外部实例化obj 给obj实例的next指针赋值
        if(current) {                             // 指向连接的下一个元素
            let value = current.value;
            current = current.next;         // 将内部指针移到下一个实例
            return {done: false, value: value};
        }else {
            return {done: true};
        }
    }
    return iterator;
}

let one = new Obj(1);
let two = new Obj(2);
let three = new Obj(3);
one.next = two;
two.next = three;

for(let i of one) {
    console.log(i);
}

console.log('--------------------------例子八： 对象加iterator接口 ------------------------------');
let obj8 = {
    data: ['hello', 'world'],
    [Symbol.iterator] () {
        const self = this;     //将外部环境传给return内部的next函数
        let index = 0;
        return {
            next () {
                if(index <= self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
};
let i8 = obj8[Symbol.iterator]();
console.log(i8.next());
console.log(i8.next());
console.log(i8.next());

console.log('--------------------------例子九： 类似数组对象(NodeList)加iterator接口 ------------------------------');
let nodelist9 = {
    0: 'word',
    1: 'a',
    2: 'b',
    3: 'c',
    length: 4,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for(let item of nodelist9) {
    console.log(item);
}

console.log('--------------------------例子十： 普通对象部署Symbol.iterator无效果 ------------------------------');
let nodelist10 = {
    a: 'word',
    b: 'a',
    c: 'b',
    d: 'c',
    length: 4,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for(let item of nodelist10) {
    console.log(item);
}

console.log('--------------------例子十一： Symbol.iterator方法没有对应遍历器函数 报错 ------------------------------');
let obj = {};
obj[Symbol.iterator] = () => 1;
//[...obj]     Result of the Symbol.iterator method is not an object
console.log('Result of the Symbol.iterator method is not an object');

console.log('--------------------------例子十二： while循环遍历有接口的对象 ------------------------------');
let $iterator = obj8[Symbol.iterator]();
let $result = $iterator.next();
while(!$result.done) {
    console.log($result);
    let x = $result.value;
    $result = $iterator.next();
}

console.log('--------------------------例子十三： 默认调用iterator接口的场合 ------------------------------');
// 解构赋值
let set = new Set().add('a').add('b').add('c');
let [x, y] = set;
console.log(`x:${x} y:${y}`);
let [first, ...rest] = set;
console.log(`first:${first} rest:${rest}`);

// 扩展运算符
let str13 = 'hello';
console.log([...str13]);

let arr13 = ['b', 'c'];
console.log(['a', ...arr13, 'd']);

// yield
let generator13 = function* () {
    yield 1;
    yield* [2, 3, 4];
    yield 5;
};
let iterator = generator13();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
/*
//for没问题
for(let i = 0; i < 6; i++) {
    console.log(iterator.next());
}
//用do-while和while都有问题  为什么？？？
do {
    console.log(iterator.next());
} while(!iterator.next().done);
while(iterator.next().done === false) {
    console.log(iterator.next());
}*/

// 其它场合   以数组为参数的地方都调用了iterator接口

console.log('--------------------------例子十四： 字符串的iterator接口 ------------------------------');
let str14 = 'hi';

//iterator接口存在  function
console.log(typeof str14[Symbol.iterator]);

// 遍历字符串
let iterator14 = str14[Symbol.iterator]();
console.log(iterator14.next());
console.log(iterator14.next());
console.log(iterator14.next());

// 覆盖原生Symbol.iterator方法
let string14 = new String('hi');
console.log([...string14]);

string14[Symbol.iterator] = function() {
    return {
        next: function() {
            if(this._first) {
                this._first = false;
                return {value: 'bye', done: false};
            } else {
                return {done: true};
            }
        },
        _first: true
    };
};
console.log([...string14]);     // 'bye   调用遍历函数  next将value改成bye
console.log(str14);        // 'hi'


console.log('--------------------------例子十五： iterator接口与Generator函数 ------------------------------');
// 实现iterator最简单的方式    不用部署next等等代码  只需要yield
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
}
console.log([...myIterable]);   // [1,2,3]

// 简洁写法
let obj15 = {
    * [Symbol.iterator] () {
        yield 'hello';
        yield 'world';
    }
};
for( let item of obj15 ) {
    console.log(item);
}

console.log('------------------例子十六： 遍历器对象的return()、throw() ------------------------------');
// 部署遍历器next必须要有  但return 和 throw不是必须的

// 遍历过程中 清空释放资源   用return
function readLineSync(file) {
    return {
        next () {
            return {done: true};
        },
        return () {            //部署return方法  必须返回对象
            file.close();
            return {done: false};
        }
    }
}
for( let line of readLineSync('data.json') ) {
    console.log(line);
    break;
}

console.log('------------------例子十七： for-of与for-in ------------------------------');
const arr17 = ['red', 'yellow', 'green'];
const obj17 = {};
 //给对象的遍历器函数绑定数组对象的上下文  对象遍历时  遍历的是数组的元素
obj17[Symbol.iterator] = arr17[Symbol.iterator].bind(arr17); 
for(let item of obj17) {
    console.log(item);
}

// for in 与 for of
console.log('--------for-in--------');
for(let index in arr17) {
    console.log(index);      // 0 1 2
}
console.log('--------for-of--------');
for(let value of arr17) {
    console.log(value);      // red yellow green
}
var a17 = [3, 5, 7];
a17.foo = 'hello';
console.log('--------for-in--------');
for(let index in a17) {
    console.log(index);      // 0 1 2 foo
}
console.log('--------for-of--------');
for(let value of a17) {
    console.log(value);      // 3 5 7  没有foo属性
}

// 普通对象 for-of会报错  用for-in遍历
// 解决办法是用 Object.keys生成一个数组  然后遍历这个数组
// 或者也可以用Generator函数包装
let es6_17 = {
    edition: 6,
    comittee: 'TC39'
};
//方法1
for(let key of Object.keys(es6_17)) {
    console.log(`${key}:${es6_17[key]}`);
}
//方法2
function* entries(obj) {
    for(let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}
for(let [key, value] of entries(es6_17)) {
    console.log(key, '->', value);
}

console.log('------------------例子十八： Set和Map结构------------------------------');
let engines = new Set(['Gecko', 'Tr', 'sdfd', 'blue']);
for(var e of engines) {      // in不输出  因为集合无索引
    console.log(e);
}

let es6 = new Map();
es6.set("edition", 6);
es6.set("Tr", 3);
es6.set("sdfd", 4);
es6.set("blue", 8);
for(let [name, value] of es6) {
    console.log(name + ':' + value);
}
for(let pire of es6) {      // 数组形式
    console.log(pire);
}

console.log('------------------例子十九： 遍历器对象------------------------------');
// entries()   keys()   values()
let arr19 = ['a', 'b', 'c', 'd', 'e'];
for(let pire of arr19.entries()) {
    console.log(pire);
}

console.log('------------------例子二十： 类似数组的对象------------------------------');
// string
let str20 = 'hello';
for(let s of str20) {
    console.log(s);
}

//NodeList
//arguments
