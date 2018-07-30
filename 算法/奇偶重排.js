function reOrderArray(array)
{
    // write code here
    var arr1 = [],
        arr2 = [];
    array.forEach(function(value) {
        if(value & 1) {
            arr2.push(value);
        }else {
            arr1.push(value);
        }
    });
    return arr1.concat(arr2);
}

console.log(reOrderArray([2,3,4,5,6,7,8]))