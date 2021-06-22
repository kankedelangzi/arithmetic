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
function mergeSortImpl(arr: number[], start: number, end: number) {
  if(start === end) return ;
  let mid = start + (end - start) >> 1
  mergeSortImpl(arr, start, mid)
  mergeSortImpl(arr, mid + 1, end)

  merge(arr, start, mid, end)

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
    if(start > mid) arr[i] = arrs[++j]; continue
    if(j > end) arr[i] = arrs[++start]; continue

    if( arr[j] < arr[start]) {
      arr[i] = arr[++j];
    } else {
      arr[i] = arr[++start]
    }
  }
}


// 堆排序


// 优先队列






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





































