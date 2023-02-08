/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numsMap = {}

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i]
    const compliment = target - num

    if (compliment in numsMap) {
      return [
        i,
        numsMap[compliment]
      ]
    }

    numsMap[num] = i
  }
};
