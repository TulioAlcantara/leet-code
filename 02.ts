
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let sum = 0;
  let current = new ListNode(0, null);
  let result = current
  while (l1 || l2) {
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    current.next = new ListNode(sum % 10, null)
    current = current.next

    sum = sum > 9 ? 1 : 0
  }
  if (sum) current.next = new ListNode(sum, null);
  return result.next
}

let a3 = new ListNode(3, null)
let a2 = new ListNode(4, a3)
let a1 = new ListNode(2, a2)

let b3 = new ListNode(4, null)
let b2 = new ListNode(6, b3)
let b1 = new ListNode(5, b2)


console.log(addTwoNumbers(a1, b1))
