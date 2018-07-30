console.log('********大疆笔试必过********')
function splitNumber(num) {
    num = num + ''
    num.replace(/(^\d{1,3})(\d{3})*[\d{3}][\.\d+]*$/g, function() {
        var i = 1,
            res = '';
        for(len=8; i++; i<len) {
            res+=arguments[i]
            console.log(arguments[i])
        }
        return res
    })
    // 
/*    var left = num.indexOf('.')<0 ? num : num.substring(0, num.indexOf('.'))
    console.log(left)
    left.replace(/(^\d{1,3})(\d{3})*\d{3}$/, $)
    num.replace()
    var arr = num.match(/(^\d{1,3})(\d{3})*(\.\d+)?$/)
    //console.log(arr)
    return arr.join(',')*/
}
//console.log()
//splitNumber(1234567.5632)

function captialize(num) {
    num = num + ''   //([\d{3}][\.\d+]*)$
    /*return num.replace(/(^\d{1,3})(\d{3})+(\.\d+)?$/g, 
    function() {
        var len = arguments.length,
            res = ''
        for(var i=1; i<len-4; i++) {
            res += (arguments[i] + ',')
        }
        res += arguments[len-4] + arguments[len-3]
        return res
    })*/

    var arr = num.match(/(^\d{1,3})(\d{3})*(\d{3})(\.\d+)?$/);
    //console.log(arr)
    return '=='
}
//console.log(captialize(1999266945.2453))

function commafy(num){
    return num && num
      .toString()
      .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2, $3, $4){
          console.log($1+'*'+$2+'*'+$3+'*'+$4)
        return $2 + ',';
      });
}
  
console.log(commafy(12000000123123.223))




