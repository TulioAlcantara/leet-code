function singleNumber(nums: number[]): number {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    let occurrences = map.get(nums[i])
    if (occurrences) {
      map.set(nums[i], ++occurrences)
    }
    else {
      map.set(nums[i], 1)
    }
  }

  for (let [key, value] of map) {
    if (value == 1) {
      return key
    }
  }
  return 0
};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
