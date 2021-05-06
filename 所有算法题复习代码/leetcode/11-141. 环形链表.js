/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//利用哈希表
 var hasCycle = function(head) {
    let map = new Map();   //哈希表存起来
    while (head) {
        if (map.has(head)) return true;
        map.set(head, 2); //存的是地址
        head = head.next
    }
    return false;
};

//快慢指针
var hasCycle = function (head) {
    let slow = head;   //每次走一步
    let quick = head;  //每次走两步
    if (head == null) {
        return false
    }
    while (quick.next != null && quick.next.next != null) {
        slow = slow.next;
        quick = quick.next.next;
        if (slow == quick) return true;
    }
    return false;
};