
/*
  链表
*/

interface ListNode<T> {
  value: T
  next: ListNode<T>|null

}



class ListNode<T> implements ListNode<T> {
  value: T
  next: ListNode<T>|null = null
  constructor(value: T) {
    this.value = value
  }
}



// 单项链表反转
//  1-2-3-4-5
//  p h n
function reverseList(head: ListNode<any>|null): ListNode<any>|null {
  let pre = null
  let next = null
  while(head) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}


// 判断链表有环

function hasCycle(head: ListNode<any>|null): boolean {
  let fast: ListNode<any>|null = head
  let slow: ListNode<any>|null = head
  while(fast && fast.next && slow) {
    fast = fast.next.next
    slow = slow.next
    if(fast === slow) return true
  }
  return false
}



// 删除链表中指定的值




// 删除链表倒数第m个节点
function searchNode(head: ListNode<any>| null,m: number) {
  let fast: ListNode<any>|null = head
  let slow: ListNode<any>|null = head
  while(fast && fast.next) {
    fast = fast.next
    if(m > 1) {
      --m
      continue
    }
    slow = slow!.next
  }
  if(m === 1) return slow
  console.log('m is bigger than lists length')
  return null
}









function test(n: number) {
  let lists: (ListNode<any>|null)[] = []
  let j = 0
  while(n-- > 0) {
    j = 5
    let head = new ListNode<number>(5)
    lists[n] = head
    while(j-- > 0) {
      head.next = new ListNode<number>(Math.floor(Math.random() * 100)) 
      head = head.next
    }
  }
  let i = lists.length
  while(i > 0) {
    // reverse(lists, i)
    search(lists, i)
    i--
  }


}

function reverse(lists: (ListNode<any>|null)[], i: number) {
  logList(lists[i])
  lists[i] = reverseList(lists[i])
  logList(lists[i])
}
function search(lists: (ListNode<any>|null)[], i: number) {
  logList(lists[i])
  let node = searchNode(lists[i], 3)
  console.log(node && node.value)
}



function logList(head: ListNode<any>|null) {
  let list = []
  while(head) {
    list.push(head.value)
    head = head.next
  }
  console.log(list)

}

test(1000)