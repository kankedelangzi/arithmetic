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





































