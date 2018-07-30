function minNumberInRotateArray(rotateArray)
{
    var len = rotateArray.length;
    if(!len) {
        return 0;
    }
    if(rotateArray[0] < rotateArray[len-1]) {
        return rotateArray[0];
    }
    var left = 0,
        right = len - 1,
        mid = left + (right - left) / 2;
    while(mid >= left && mid <= right) {
        if(mid == left) {
            return rotateArray[mid];
        }
        if(rotateArray[mid] > rotateArray[left]) {
            left = mid+1;
            mid = left + parseInt((right - left) / 2);
        }else {
            right = mid;
        }
    }
}
console.log(minNumberInRotateArray([3,4,5,1,2]));