/*
  ex:
  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]
*/


/*
  O(n) time
  O(n) space

  answers[i] =
    cumulative product of all elements that came before it *
    cumulative product of all elements that came after it

  ex:
  beforeProducts = [1,  2,  6,  24]
    (stores at place i the cumulative product of elements before i and including element i)
  afterProducts  = [24, 24, 12, 4]
    (stores at place i the cumulative product of elements after i and including element i)
  products       = [24, 12, 8,  6]
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const products = []
  const beforeProducts = []
  const afterProducts = []

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      beforeProducts[i] = nums[i]
    } else {
      beforeProducts[i] = beforeProducts[i - 1] * nums[i]
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      afterProducts[i] = nums[i]
    } else {
      afterProducts[i] = afterProducts[i + 1] * nums[i]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    // product = beforeProducts[i] * afterProducts[i],
    // except for when n == 0 or nums.length - 1
    products[i] = (
      i === 0
        ? 1
        : beforeProducts[i - 1]
    ) * (
      i === nums.length - 1
        ? 1
        : afterProducts[i + 1]
    )
  }

  return products
};



/*
  O(n) time
  O(1) space

  This solution basically consolidates the beforeProducts and afterProducts arrays
  and stores those value inside the answers array itself. Since the problem says not
  to count the size of the output array as extra space, this solution is O(1).

  ex:
  Answers array after first pass through = [1, 1, 2, 6]
    (essentially this is the beforeProducts array, but stores only the products of elements before element i)
  Answers array after second pass through = [24, 12, 8, 6]
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const products = []

  // fill array where element i = the cumulative product of the elements before i
  for (let i = 0; i < nums.length; ++i) {
    if (i === 0) {
      products[i] = 1
    } else {
      products[i] = products[i - 1] * nums[i - 1]
    }
  }

  // keep track of the cumulative product of elements after i (loop will go in reverse direction)
  let afterProduct = nums[nums.length - 1]

  for (let i = nums.length - 2; i >= 0; --i) {
    products[i] *= afterProduct
    // the element at i is now =
    // the cumulative product of elements before i *
    // the cumulative product of elements after i

    // update the cumulative product of elements after i
    afterProduct *= nums[i]
  }

  return products
}
