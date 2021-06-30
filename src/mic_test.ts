// FindFloorCeil(node* root, node* &floor, node* &ceil, int key)

// [1,3,5,7,9]

//       5
//     3   7
//   1         9


//          10
//       5      15
//     1   6  11  18
            
//     14
// 6    5 < 6,   5.right > 6

// 7    5 < 7   5.right === 7 
// 4
// interface Node {
//   value: any
//   left: Node
//   right: Node
// }
// function FindFloorCeil(root: Node, floor: Node, ceil: Node, key: number) {
//     let p = root
//     let q = root
//      while(p !== null) {
//        if(p.value === key) {
//          floor = p
//          ceil = p
//          break
//        }
//        if(p.value < key) {
//          floor = p
//          p = p.right
//        } else {
//          ceil = p
//          p = p.left
//        } 
//      }
//      return [floor, ceil]
// }

// 长度n的整数数组的其中最小的k个数字
// [3,1,7,4, 2, 5, 8, 6]  4  [3,1,4,2]

// 3   [1,2,3]  [7,4,...] [1,2,3,7,4]
//  3   1 2 374



// function getTopK(numbers: number[], k: number): number[] {
//   let res: number[] = []
//   let biger: number[] = []
//   let tar = numbers[0]
//   let i = 1
//   let len = numbers.length
//   while( i < len ) {    //N
//     if(numbers[i] < tar) {
//       res.push(numbers[i])
//     } else {
//       biger.push(numbers[i])
//     }
//     i++
//   }
//   let N = res.length
//   if(N === k ) return res
//   if(N === k - 1) {
//     res.push(tar)
//     return res
//   }
//   if(N > k) return getTopK(res, k) //  
  
//   let rest = getTopK(biger, k - N - 1) 
//   res.push(tar)
//   res.concat(rest)

//   return res
// }
// function swap(arr: any[], i: number, j: number) {
//   let tem = arr[i]
//   arr[i] = arr[j]
//   arr[j] = tem
// }














