var str = 'cat red dog rabbit cat moneky pig cat cat';

var arr = str.match(/(\w+)\s/g);
var pattern = new RegExp('([\w]) ', 'g');
var res;
while((res = pattern.exec(str)) != null) {
    console.log(res)
}
console.log(res);
console.log('arr:  ' + arr.join(' '));