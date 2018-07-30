function iterator(obj) {
    var arr = [],
        cur;
    arr.push(obj);
    while(arr.length > 0) {
        cur = arr.shift();
        for(var key in cur) {
            if(typeof cur[key] === 'object') {
                arr.push(cur[key]);
            }else {
                console.log(cur[key]);
            }
        }
    }
}

iterator({
    1: {
        1: '大花',
        2: '许魏洲'
    },
    2: {
        1: 'offer'
    },
    4: [1,2,3,4,5,6],
    5: '黄景瑜'
});