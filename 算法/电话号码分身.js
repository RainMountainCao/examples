

var numbers = ["ZERO", "ONE", "TWO", "THREE","FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];
var T = 5;
var stringArr = ['SIX', 'EIGHT', 'ZEROTWOONE','OHWETENRTEO','OHEWTIEGTHENRTEO'];
var numberArr = [];
for(var i=0; i<T; i++) {
    /*
要先依次解码具有独一无二字符的数字，具有这样特点的数字有五个分别是FOUR(U),SIX(X),
TWO(W),EIGHT(G),ZERO(Z),可以根据独特字符的个数直接判断有多少个相应的数字，例如有
3个U那么就一定有3个FOUR...,解码完成这五个数字之后另外的数字也会由于这些数字的移除
而具有了独一无二的字符，这样的数字有FIVE(F)，THREE(T),FIVE找到之后，只有SEVEN含
有V,所以又可以依据V字符的个数解码SEVEN的个数，最后剩下的ONE和NINE也具有了自己的
标志性字符分别是ONE(O),NINE(I)， */
    for(var x=0; x<10; x++) {
        numberArr[i] = {};
    }
    // ZERO  
    while(stringArr[i].indexOf('X')>0) {
        stringArr[i] = stringArr[i].replace(/Z/, '');
        stringArr[i] = stringArr[i].replace(/E/, '');
        stringArr[i] = stringArr[i].replace(/R/, '');
        stringArr[i] = stringArr[i].replace(/O/, '');
        numberArr[i][0]++;
    }
    // FOUR
    while(stringArr[i].indexOf('U')>0) {
        stringArr[i] = stringArr[i].replace(/F/, '');
        stringArr[i] = stringArr[i].replace(/O/, '');
        stringArr[i] = stringArr[i].replace(/U/, '');
        stringArr[i] = stringArr[i].replace(/R/, '');
        numberArr[i][4]++;
    }

    // EIGHT(G) 
    while(stringArr[i].indexOf('G')>0) {
        stringArr[i] = stringArr[i].replace(/E/, '');
        stringArr[i] = stringArr[i].replace(/I/, '');
        stringArr[i] = stringArr[i].replace(/G/, '');
        stringArr[i] = stringArr[i].replace(/H/, '');
        stringArr[i] = stringArr[i].replace(/T/, '');
        numberArr[i][8]++;
    }
    // SIX(X)
    while(stringArr[i].indexOf('X')>0) {
        stringArr[i] = stringArr[i].replace(/S/, '');
        stringArr[i] = stringArr[i].replace(/I/, '');
        stringArr[i] = stringArr[i].replace(/X/, '');
        numberArr[i][6]++;
    }
    // TWO(W)
    while(stringArr[i].indexOf('W')>0) {
        stringArr[i] = stringArr[i].replace(/T/, '');
        stringArr[i] = stringArr[i].replace(/W/, '');
        stringArr[i] = stringArr[i].replace(/O/, '');
        numberArr[i][2]++;
    }

    // FIVE(F)
    while(stringArr[i].indexOf('F')>0) {
        stringArr[i] = stringArr[i].replace(/F/, '');
        stringArr[i] = stringArr[i].replace(/I/, '');
        stringArr[i] = stringArr[i].replace(/V/, '');
        stringArr[i] = stringArr[i].replace(/E/, '');
        numberArr[i][5]++;
    }

    // THREE(T)
    while(stringArr[i].indexOf('T')>0) {
        stringArr[i] = stringArr[i].replace(/T/, '');
        stringArr[i] = stringArr[i].replace(/H/, '');
        stringArr[i] = stringArr[i].replace(/R/, '');
        stringArr[i] = stringArr[i].replace(/E/, '');
        stringArr[i] = stringArr[i].replace(/E/, '');
        numberArr[i][3]++;
    }

    // SEVEN(V)
    while(stringArr[i].indexOf('V')>0) {
        stringArr[i] = stringArr[i].replace(/S/, '');
        stringArr[i] = stringArr[i].replace(/V/, '');
        stringArr[i] = stringArr[i].replace(/N/, '');
        stringArr[i] = stringArr[i].replace(/E/, '');
        stringArr[i] = stringArr[i].replace(/E/, '');
        numberArr[i][7]++;
    }

    // NINE(I)
    while(stringArr[i].indexOf('I')>0) {
        stringArr[i] = stringArr[i].replace(/N/, '');
        stringArr[i] = stringArr[i].replace(/I/, '');
        stringArr[i] = stringArr[i].replace(/N/, '');
        stringArr[i] = stringArr[i].replace(/E/, '');
        numberArr[i][9]++;
    }

    // ONE(O)
    while(stringArr[i].indexOf('O')>0) {
        stringArr[i] = stringArr[i].replace(/N/, '');
        stringArr[i] = stringArr[i].replace(/O/, '');
        stringArr[i] = stringArr[i].replace(/E/, '');
        numberArr[i][1]++;
    }

    var str = [];

    for(var n=0; n<10; n++) {
        for(var m=0; m<numberArr[i][n]; m++) {
            var p = n-8>=0 ? n : n-2;
            str.push(p);
        }
    }
    // str冒泡排序

    console.log(str.join(''));
}




