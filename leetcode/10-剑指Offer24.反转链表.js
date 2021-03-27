/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {
    let prev = null;
    let cur = head;
    while (cur) {
        next = cur.next; //记录cur.next节点
        cur.next = prev;
        prev = cur;
        cur = next
    }
    return prev
};