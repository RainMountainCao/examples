function Find(target, array) {
    var r = 0,
        c = array[r].length-1;
    while(r<array.length && c>=0) {
        if(target == array[r][c]) {
            return true;
        }else if(target > array[r][c]) {
            r++;
        }else {
            c--;
        }
    }
    return false;
}
var b = Find(7,[[1,2,8,9],[4,7,10,13]]);
console.log(b);