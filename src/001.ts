// 排序


// 选择排序
function selectSort(arr: number[]) {
  let i = 0
  let j = 0
  let len = arr.length
  let minIndex = 0
  while(i < len) {
    j = i
    minIndex = i
    while(j < len) {
      if(arr[j] < arr[i]) minIndex = j
      j++
    }
    swap(arr, i, minIndex)
    i++ 
  }
}

// 冒泡排序
function bubbleSort(arr: number[]) {
  let i = 0
  let j = 0
  let len = arr.length
  while( i < len) {
    j = 0
    while(j < len - i -1) {
      if(arr[j] > arr[j + 1]) swap(arr, j, j +1)
      j++
    }
    i++
  }
}

// 插入排序
function insertSort(arr: number[]) {
  let i = 0
  let j = 0
  let len = arr.length
  while( i < len) {
    let j = i 
    while(j >= 0) {
      if(arr[j] < arr[j - 1]) swap(arr, j, j - 1)
      --j
    }
    ++i
  }
}

// 希尔法排序


// 归并排序
function mergeSort(arr: number[]) {

  mergeSortImpl(arr, 0, arr.length - 1)
}
// 递归实现 
function mergeSortImpl(arr: number[], start: number, end: number) {
  if(start === end) return ;
  let mid = start + (end - start) >> 1
  mergeSortImpl(arr, start, mid)
  mergeSortImpl(arr, mid + 1, end)

  merge(arr, start, mid, end)

}

// 循环实现 自底向上
function mergeSortImpl2(arr: number[]) {
  let N = arr.length
  let mergeSize = 1
  while( mergeSize < N) {
    let L = 0 // 左边界
    while(L < N) {
      let M = L + mergeSize - 1  
      if(M > N) break; // 考虑右边只剩下不足半个空间，直接跳过
      let R = Math.min(M + mergeSize, N - 1) // 考虑右边溢出
      // 意思是以 mergeSize大小  让 区间[L, R] 有序
      merge(arr, L, M, R)

      L = R + 1
    }
    if( mergeSize > N/ 2) break; // 这种比较的空间最大是 等于N/2
    mergeSize <<= 1
  }

}


function merge(arr: number[], start: number, mid: number, end: number) {
  if(start === end) return;
  let arrs = []
  let i = start
  let j = mid
  for(; i < end; i++) {
    arrs[i] = arr[i]
  }
  i = start
  for(; i < end; i++) {
    if(start > mid) {
      arr[i] = arrs[++j]; continue;
    }
    if(j > end) {
      arr[i] = arrs[++start]; continue
    }
    if( arr[j] < arr[start]) {
      arr[i] = arr[++j];
    } else {
      arr[i] = arr[++start]
    }
  }
}


// 堆排序
function heapSort() {

}

function swim(arr: number[], k: number) {
  let N = arr.length
  while( k > 1 && arr[k] > arr[k >> 1]) {
    swap(arr, k, k >> 1)
    k >>= 1
  }
}

function sink(arr: number[], k: number) {
  let N = arr.length
  
    while( k <  N >> 1) {
      let t = 2 * k
      if(t + 1 < N && arr[t] < arr[t + 1]) ++t;

      if(arr[t] < arr[k]) break

      swap(arr, k, t)

      k = t
    }
}

function initHeapUp(arr: number[]) {
  let i = 0
  let N = arr.length
  while( i < N) {
    swim(arr, i)
    ++i
  } 
}

function initHeapDown(arr: number[]) {
  let N = arr.length
  let i = N
  while( i >= 1) {
    sink(arr, i)
    --i
  } 
}

function insertHeap(arr: number[], cur: number) {
  let N = arr.length
  arr[++N] = cur
  swim(arr, N)
}

function deleteMax(arr: (number|undefined)[]) {
  let N = arr.length
  let max = arr[N]
  swap(arr as number[], 1, N--)

  arr[N + 1] = undefined

  return max
}









function swap(arr: number[], i: number,j: number): void {
  let tem = arr[i]
  arr[i] = arr[j]
  arr[j] = tem

}






function test(source: number[][]) {
  source.forEach((item: number[]) => {
    insertSort(item)
    console.log(item)
  })
}


export default test



/*
  归并排序案例: 在数组中一个数左边比它小的数的总和叫做这个数的小和， 所有的小和加起来叫做数组的小和，求数组小和
  eg: [1,3,4,2,5]   的小和  是     1 +    1 + 2    + 1  + 1+ 3+ 4+ 2  = 16
  分解：   暴力实现 O(n^2) 
  优化： 暴力实现的过程每一次比较仅仅是比较了大小，并没有其他工作， 如果能在比较的过程中让问题变得简单即可实现优化
  最简单的思路就是  数组有序的话是不是会变简单 [1,2,3,4,5]   这样就是 O(n),因为就变成了前n项求和了。
  对比有序数组和无序数组，发现在有序的过程中原有的位置特性丢失了，那么如果在有序的过程中能记录下这些位置特性的话
  就能实现原始问题的求解
  思路 
  对于  1  左边无数 跳过
  对于  3  左边有一个   1   进行累加，并且这事让  1， 3有序并不影响后边数字判断
  对于  4  左边  1 3 同上
  对于  2  左边有个1        进行累加之后对其排序得到  [1,2,3,4,5] 这样由于3，和4 已经处理过所以即便是2到了他们的左边也不要再
  处理了， 这样2到了左边无影响   对于右边的 5而言，由于是对5左边部分的排序，所以不存在影响
  对于 5   得到1，2，3，4          

*/




































