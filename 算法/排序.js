// 取随机数
function randomNum(min, max, length) {
    let arr = [];
    for(let i=0; i<length; i++) {
        arr.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return arr;
}

// 时间复杂度: O(N)
// 冒泡排序
function BubbleSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// 插入
function InsertSort(arr) {
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < arr[i-1]) {
            let j = i-1;
            while(arr[j-1] > arr[i]) {
                j--;
            }
            let temp = arr.splice(i, 1);
            arr.splice(j, 0, temp);
        }
    }
}

// 二分插入
function BinaryInsertSort(arr) {
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < arr[i-1]) {
            let left = 0,
                right = i-1,
                mid;
            while(left <= right) {
                mid = parseInt((left + right)/2);
                if(arr[mid] > arr[i]) {
                    right = mid - 1;
                }else {
                    left = mid + 1;
                }
            }
            let temp = arr.splice(i, 1);
            arr.splice(left, 0, temp);
        }
    }
}

// 希尔排序
function SheelSort(arr) {
    let gaps = [3, 2, 1];
    for(let i=0; i<gaps.length; i++) {
        for(let j=gaps[i]; j<arr.length; j++) {
            let k=j;
            while(k>=gaps[i] && arr[j]<arr[k-gaps[i]]) {
                k-=gaps[i];
            }
            let temp = arr.splice(j, 1);
            arr.splice(k, 0, temp);
        }
    }
}

// 快排
function QuickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let cur = arr[0],
        left = [],
        right = [];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > cur) {
            right.push(arr[i]);
        }else {
            left.push(arr[i]);
        }
    }
    let res = QuickSort(left).concat([cur], QuickSort(right));
    arr.splice(0, arr.length, res);
    return arr;
}

// 堆排序
function HeapSort(arr) {
    // 构建堆
    function createHeap(arr) {
        for(let i=0; i<arr.length; i++) {
            
        }
    }
    // 
}


var start, end;
var arr = [2, 1, 12, 4, 89, 1, 0, 6, 1]/*randomNum(0,10,10)*/;
console.log('排序前：' + arr);
start = Date.now();
QuickSort(arr);
end = Date.now();
console.log('排序后： ' + arr);
console.log('时间：  ' + (end-start));

		/*堆排序
		var heapSort=function(arr){
			function swap(arr,i,j){
				var temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
			function maxHeapify(arr,index,heapSize){
				var left=index*2+1;
				var right=2*(index+1);
				var iMax=index;

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

			function buildMaxHeap(arr){
				var iParent=Math.floor(arr.length/2)-1;
				for(var i=iParent;i>=0;i--){
					maxHeapify(arr,i,arr.length);
				}
			}

			function sort(arr){
				buildMaxHeap(arr);

				for(var i=arr.length-1;i>=0;i--){
					swap(arr,0,i);
					maxHeapify(arr,0,i);
				}
				return arr;
			}
			return sort(arr);
		}

		var arr=[85,24,63,45,17,31,96];
		document.write(heapSort(arr));*/


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
		}
		var arr=[85,24,63,45,17,31,96];
		document.write(mergeSort(arr));*/