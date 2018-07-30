var arr1 = [1,2,3,4,5,6];
var arr2 = [9,8,7,6,5,4,3,2,1];

function merge(arr1, arr2) {
    var res = [], i=0, j=arr2.length-1;
    while(res.length < (arr1.length + arr2.length)) {
            if(arr1[i] < arr2[j]) {
                res.push(arr1[i]);
                i++;
            }else{
                res.push(arr2[j]);
                j--;
            }
    }
    return res;
}
console.log(merge(arr1, arr2));

