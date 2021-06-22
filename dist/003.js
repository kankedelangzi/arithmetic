"use strict";
/*
  链表
*/
class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
// 单项链表反转
//  1-2-3-4-5
//  p h n
function reverseList(head) {
    let pre = null;
    let next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}
// 判断链表有环
function hasCycle(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next && slow) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow)
            return true;
    }
    return false;
}
// 删除链表中指定的值
// 删除链表倒数第m个节点
function searchNode(head, m) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next;
        if (m > 1) {
            --m;
            continue;
        }
        slow = slow.next;
    }
    if (m === 1)
        return slow;
    console.log('m is bigger than lists length');
    return null;
}
function test(n) {
    let lists = [];
    let j = 0;
    while (n-- > 0) {
        j = 5;
        let head = new ListNode(5);
        lists[n] = head;
        while (j-- > 0) {
            head.next = new ListNode(Math.floor(Math.random() * 100));
            head = head.next;
        }
    }
    let i = lists.length;
    while (i > 0) {
        // reverse(lists, i)
        search(lists, i);
        i--;
    }
}
function reverse(lists, i) {
    logList(lists[i]);
    lists[i] = reverseList(lists[i]);
    logList(lists[i]);
}
function search(lists, i) {
    logList(lists[i]);
    let node = searchNode(lists[i], 3);
    console.log(node && node.value);
}
function logList(head) {
    let list = [];
    while (head) {
        list.push(head.value);
        head = head.next;
    }
    console.log(list);
}
test(1000);
//# sourceMappingURL=003.js.map