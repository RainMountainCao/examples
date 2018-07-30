
  // 快速排序

  // 方法一：传入数组，左右下标
  /*
  function quickSort(arr, left, right) {
    if(left === right) {
        return
    }
    var index = partition(arr, left, right)
    if(left < index) {
        quickSort(arr, left, index-1)
    }
    if(right > index) {
        quickSort(arr, index+1, right)
    }
  }

  function partition(a, left, right) {
    let flag = a[left]
    while(left<right) {
        while(flag<=a[right]&&left<right) {
            right--
        }
        [a[left], a[right]] = [a[right], a[left]]
        //console.log('right-- ' + a)
        while(flag>=a[left]&&left<right) {
            left++
        }
        [a[left], a[right]] = [a[right], a[left]]
        //console.log('left++  ' + a)
    }
    return left
  }         // 5
        //[5,3,6,9,8,5,2]
*/

/*
function quickSort



var arr = [5,3,6,9,8,5,2]
quickSort(arr, 0, arr.length-1)
  console.log('arr' + arr)*/

  // 归并排序
  // 分治
  /*
  function merge(left,right){
        let tmp=[];
        while(left.length&&right.length){//合并左右数组
            if(left[0]<right[0])
                tmp.push(left.shift());
            else
                tmp.push(right.shift());
        }
        return tmp.concat(left,right);
    }
    function mergeSort(a){
        if(a.length==1)//终止条件
            return a;
        let mid=a.length>>1,    // Math.floor(7)
            left=a.slice(0,mid),
            right=a.slice(mid);
        return merge(mergeSort(left),mergeSort(right))
    }*/
/*
    function mergeSort(a) {
        if(a.length === 1) {
            return a
        }
        var mid  = a.length >> 1,
            left = a.slice(0, mid),
            right = a.slice(mid)
        return merge(mergeSort(left), mergeSort(right))
    }

    function merge(left, right) {
        var temp = []
        while(left.length && right.length) {
            if(left[0] > right[0]) {
                temp.push(right.shift())
            }else {
                temp.push(left.shift())
            }
        }
        return temp.concat(left, right)
    }
*/

// 非递归归并
/*
function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0])
            result.push(left.shift());
        else
            result.push(right.shift());
    }
    return result.concat(left, right);
}
function mergeSort(a) {
    if (a.length === 1)
        return a;
    let work = [],len=a.length;
    for (let i = 0; i < len; i++)
        work.push([a[i]]);
    work.push([]); // 如果数组长度为奇数
    let last=0;
    for (let lim = len; lim > 1; lim = (lim + 1)>>1) {
        for (let j = 0, k = 0; k < lim; j++, k += 2) {
            work[j] = merge(work[k], work[k + 1]);
            last=j;
        }
        work[last+1] = []; // 如果数组长度为奇数
    }
    return work[0];
}
*/
// 归并非递归实现
/*
function merge(left, right) {
    var temp = []
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            temp.push(left.shift())
        }else {
            temp.push(right.shift())
        }
    }
    return temp.concat(left, right)
}
function mergeSort(a) {
    var result = [],
        len = a.length
    for(var i=0; i<len; i++)
        result.push([a[i]])
    result.push([])
    for(; len>=1; len=len>>1) {
        var i = 0;
        for(var k=0; k<len; k+=2,i++) {
            result[i] = merge(result[k], result[k+1])
        }
        result[i] = []
    }
    return result[0]
}

*/
/*
function quickSort(a, left, right) {
    if(left == right) {
        return
    }
    var index = partion(a, left, right)
    if(index<right) {
        quickSort(a, index+1, right)
    }
    if(index>left) {
        quickSort(a, left, index-1)
    }
}
function partion(a, left, right) {
    var temp = a[left]
    while(left<right) {
        while(temp<=a[right]&&left<right) {
            right--
        }
        [a[left], a[right]] = [a[right], a[left]]
        while(temp>=a[left]&&left<right) {
            left++
        }
        [a[left], a[right]] = [a[right], a[left]]
    }
    return left
}
*/
function mergeSort(a) {
    if(a.length === 1) {
        return a
    }
    var len = a.length >> 1,
        left = a.slice(0, len),
        right = a.slice(len)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    var temp = []
    while(left.length&&right.length) {
        if(left[0] < right[0]) {
            temp.push(left.shift())
        }else {
            temp.push(right.push())
        }
    }
    return temp.concat(left, right)
}

function mergeSort(a) {
    var len = a.length,
        result = []
    for(var i=0; i<len; i++)
        result.push([a[i]])
    result.push([])
    for(;len>=1; len=len>>1) {
        var i = 0
        for(var k=0; k<len; i+=2, i++) {
            result[i] = merge(result[k], result[k+1])
        }
        result[i] = []
    }
    return result[0]
}

var a = [5,3,7,0,5,3,6]
quickSort(a, 0, a.length-1)
console.log(a)

//console.log(mergeSort([5,3,7,0,5,3,6]))