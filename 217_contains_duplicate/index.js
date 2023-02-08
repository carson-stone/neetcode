/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const numMap = {}

  for (const num of nums) {
    if (num in numMap) {
      return true
    }

    numMap[num] = true
  }

  return false
};


// using Set
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const numSet = new Set(nums)

  return numSet.size !== nums.length
}
