class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const resultNode = new ListNode(0, null);
  let tail = resultNode
  while (list1 && list2) {
    if (list1?.val < list2?.val) {
      tail.next = new ListNode(list1?.val, null)
      list1 = list1.next
    }
    else {
      tail.next = new ListNode(list2?.val, null)
      list2 = list2.next
    }
    tail = tail.next
  }
  if (list1) tail.next = list1
  if (list2) tail.next = list2
  return resultNode.next
}
