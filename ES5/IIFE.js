/*var foo = "abc";
with({
    foo:"bar"
}){
    function f(){
        console.log(foo);
    };
    (function(){
        console.log(foo);
    })();
    f();
}
*/
/*
try{
    var e = 10;
    throw new Error();
}catch(e){
    function f(){
        console.log(e);
    }
    (function (){
        console.log(e);
    })();
    f();
}
*/