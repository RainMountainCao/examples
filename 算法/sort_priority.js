// 插入排序
/*
function insertSort(arr) {
    var index = 1;
    for(index; index<arr.length; index++) {
        var i = index;
        while(i>=0 && arr[i-1] > arr[index]) {
            if(arr[i-1] < arr[index]) {
                break;
            }
            i--;
        }
        var a = arr.splice(index, 1)[0];
        arr.splice(i, 0, a);
    }
    console.log(arr);
}
*/

/*
function insertSort(arr) {
    var index = 1;
    for(index; index<arr.length; index++) {
        var i = index;
        while(arr[i-1]>arr[index] && i>=0) {
            i--;
        }
        var a = arr.splice(index, 1)[0];
        arr.splice(i, 0, a);
    }
    console.log(arr);
}
*/

/*
function insertSort(arr) {
    var index = 1;
    for(index; index<arr.length; index++) {
        var i = index;
        while( arr[index]<arr[i-1] && i>=0 ) {
            i--;
        }
        var a = arr.splice(index, 1)[0];
        arr.splice(i, 0, a);
    }
    console.log(arr);
}
*/

/*
function insertSort(arr) {
    var index = 1;
    for(index; index<arr.length; index++) {
        var i = index;
        while( arr[index] < arr[i-1] && i>=0 ) {
            i--;
        }
        var a = arr.splice(index, 1)[0];
        arr.splice(i, 0, a);
    }
    console.log(arr);
}
*/

/*
function insertSort(arr) {
    var index = 1;
    for(index; index<arr.length; index++) {
        var i = index;
        while(arr[index] < arr[i-1]) {
            i--;
        }
        var a = arr.splice(index, 1)[0];
        arr.splice(i, 0, a);
    }
    console.log(arr);
}
*/
/*
function insertSort(arr) {
    var index = 1;
    for(index; index<arr.length; index++){
        var i = index;
        while(arr[index] < arr[i-1] && i >= 0) {
            i--;
        }
        var a = arr.splice(index, 1)[0];
        arr.splice(i, 0, a);
    }
    console.log(arr);
}
*/

/*
function quickSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    var index = arr[0],
        left = [],
        right = [];
    for(var i=1; i<arr.length; i++) {
        if(arr[i] > index) {
            right.push(arr[i]);
        }else {
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat(index, quickSort(right));
}
*/

// 选择排序

// 归并排序
function mergeSort(arr){
    
}


// 堆排序
function heapSort(arr) {
    // 交换
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // 判断构建最大堆
    function maxHeapify(arr, index, heapSize) {
        var iMax = index,
            left = index*2 + 1,
            right = index*2 + 2;
            if(left<heapSize && arr[left]>arr[index]){
                iMax=left;
            }
            if(right<heapSize && arr[right]>arr[iMax]){
                iMax=right;
            }
            if(iMax!=index){
                swap(arr,index,iMax);
                maxHeapify(arr,iMax,heapSize);
            }
    }
    // 构建最大堆
    function buildHeap(arr) {
        var iParent = Math.floor(arr.length/2)-1;
        for(var i=iParent;i>=0;i--){
            maxHeapify(arr,i,arr.length);
        }
    }
    function sort(arr) {
        buildHeap(arr);
        for(var i=arr.length-1; i>=0; i--) {
            // 将最大的移到最后
            swap(arr, 0, i);
            // 前面重新构建最大堆
            maxHeapify(arr, 0, i)
        }
        return arr;
    }
    return sort(arr);
}


console.log(heapSort([80,9,-8,10,4,5,0]));

/*归并排序
var mergeSort=function(arr){
    if(arr.length<2){
        return arr;
    }
    var mid=Math.floor(arr.length/2),
        left=arr.slice(0,mid),
        right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));

    function merge(left,right){
        var result=[];
        while(left.length>0 && right.length>0){
            if(left[0]<right[0]){
                result.push(left.shift());
            }else{
                result.push(right.shift());
            }
        }
        while(left.length){
            result.push(left.shift());
        }
        while(right.length){
            result.push(right.shift());
        }
        return result;
    }
}*/