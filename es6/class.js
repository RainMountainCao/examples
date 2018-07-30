class Point {
    constructor() {
       
    }

    toString() {

    }

    toValue() {

    }
}

console.log(Object.keys(Point.prototype));
console.log('getOwnPropertyNames: ' + (Object.getOwnPropertyNames(Point.prototype)));
console.log('constructor & Point: ' + (Point.prototype.constructor === Point));

function handsome() {
    rich: true
}
handsome.prototype = {
    age: 18,
    name: '许魏洲',
    love: true
}
console.log(Object.getOwnPropertyNames(handsome.prototype));

// 相当于
/*
Point.prototype = {
    constructor() {},
    toString() {},
    toValue() {},
}
*/

let methodName = 'getArea';
class Square {
    constructor() {

    }
    [methodName]() {

    }
}
console.log(Object.getOwnPropertyNames(Square.prototype));


// 4） 表达式声明class
const myClass = class Me {
    getClassName() {
        return Me.name;
    }
}
let inst = new myClass();
console.log(inst.getClassName());

// proxy给类内部方法绑定this  代理  获取方法时将该方法以键值对形式存储
// value的值绑定了this
function serfish(target) {
    const cache = new WeakMap();
    const handler = {
        get(target, key) {
            const value = Reflect.get(target, key);
            if(typeof value !== 'function') {
                return value;
            }
            if(!cache.has(value)) {
                cache.set(value, value.bind(target)); // 绑定到类
            }
            return cache.get(value);
        }
    };
    const proxy = new Proxy(target, handler);
    return proxy;
}


class Book {
    constructor(...args) {
        //this.age = 0;
        this.args = args;
    }
    
    set age(value) {
        //age = value;
        console.log('setter  ' + value);
    }

    get age() {
        //console.log('getter' + this.age);
        return 'getter';
    }

    *[Symbol.iterator] () {
        for(let arg of this.args) {
            yield arg;
        }
    }
}

console.log(Book.name);
var book = new Book([1,2,3,4,5,8]);
book.age = 18;
console.log(book.age);

// class interator
console.log(book);

for(let attr of book) {
    console.log(attr);
}

class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.prop = 2;
console.log(Foo.classMethod());
console.log(Foo.prop);

class FooChild extends Foo {
}
console.log(FooChild.classMethod());

console.log(FooChild.prop);

function Person(name) {
    // 方法1
/*  if(new.target !== undefined) {   // new.target未定义
        this.name = name;
    } else {
        throw new Error('必须用new');
    }
*/
    // 方法2
    if(new.target === Person) {
        this.name = name;
    } else {
        throw new Error('必须用new');
    }
}

class Shape {
    constructor(length) {
        if(new.target === Shape) {
            throw new Error('不能直接使用该类');
        }
    }
}
class circle extends Shape {
    constructor(r) {
        super();   // 调用父类构造函数成功
    }
}

// 继承 super的用法
class Fruit {
    constructor(color) {
        this.color = color;
    }
    print() {
        console.log('pirnt');
    }
}
Fruit.prototype.color = 'blue';
class Apple extends Fruit{
    constructor (color) {
        //this.taste = 'good';
        super(color);
        this.size = 'big';
        super.print();
        console.log(super.color);
    }
}
var apple = new Apple('red');


/*
class A {

}
class B extends A {

}

console.log(B.__proto__ === A);   // B的构造函数的原型是A
// B的原型的构造函数的原型式A的原型
console.log(B.prototype.__proto__ === A.prototype);
console.log(B.__proto__ === A);
*/

//B.prototype = new A();

// 继承的实现原理
class A {

}
class B {

}

// B的实例继承A的实例
Object.setPrototypeOf(B.prototype, A.prototype);
// B的实例继承A的静态属性
Object.setPrototypeOf(B,A);
const b = new B();

Object.setPrototypeOf = function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
}


