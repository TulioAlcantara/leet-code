function searchInsert(nums: number[], target: number): number {
  let index = nums.indexOf(target)
  if (index !== -1) return index
  nums.push(target)
  nums = nums.sort((a, b) => { return a - b })
  return nums.indexOf(target)
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([3, 5, 7, 9, 10], 8))
console.log(searchInsert([1, 3, 5, 6], 7))
