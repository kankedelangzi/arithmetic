"use strict";
// 排序
Object.defineProperty(exports, "__esModule", { value: true });
// 选择排序
function selectSort(arr) {
    let i = 0;
    let j = 0;
    let len = arr.length;
    let minIndex = 0;
    while (i < len) {
        j = i;
        minIndex = i;
        while (j < len) {
            if (arr[j] < arr[i])
                minIndex = j;
            j++;
        }
        swap(arr, i, minIndex);
        i++;
    }
}
// 冒泡排序
function bubbleSort(arr) {
    let i = 0;
    let j = 0;
    let len = arr.length;
    while (i < len) {
        j = 0;
        while (j < len - i - 1) {
            if (arr[j] > arr[j + 1])
                swap(arr, j, j + 1);
            j++;
        }
        i++;
    }
}
// 插入排序
function insertSort(arr) {
    let i = 0;
    let j = 0;
    let len = arr.length;
    while (i < len) {
        let j = i;
        while (j >= 0) {
            if (arr[j] < arr[j - 1])
                swap(arr, j, j - 1);
            --j;
        }
        ++i;
    }
}
// 希尔法排序
// 归并排序
// 堆排序
// 优先队列
function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}
function test(source) {
    source.forEach((item) => {
        insertSort(item);
        console.log(item);
    });
}
exports.default = test;
//# sourceMappingURL=001.js.map