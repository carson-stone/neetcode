/*
  ex:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]
*/


/*
  map for frequency of elements + sort
  O(n * log(n))
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const elemFrequency = {}

  for (const num of nums) {
    elemFrequency[num] = (elemFrequency[num] || 0) + 1
  }

  const sorted = Object.keys(elemFrequency)
    .sort((a, b) => {
      if (elemFrequency[a] < elemFrequency[b]) {
        return 1
      } else if (elemFrequency[a] > elemFrequency[b]) {
        return -1
      } else {
        return 0
      }
    })

  return sorted.slice(0, k)
};
