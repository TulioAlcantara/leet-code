class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let temp = head
  while (temp) {
    while (temp?.next !== null && temp.val === temp?.next.val) {
      temp.next = temp.next.next
    }
    temp = temp.next
  }
  return head
};


let a3 = new ListNode(2, null)
let a2 = new ListNode(1, a3)
let a1 = new ListNode(1, a2)

deleteDuplicates(a1)
