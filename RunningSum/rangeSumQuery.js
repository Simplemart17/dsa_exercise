// Range Sum Query - Immutable

// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) { // [-2,0,3,-5,2,-1]
  this.runningSum = []; // [-2, -2, 1, -4, -2, -3]
  let numSum = 0; // -2, -2, 1, -4, -2, -3
  for (let i = 0; i < nums.length; i++) { // 0  1  2  3  4  5 
      numSum += nums[i]; // 0 + (-2); -2 + 0; -2 + 3; 1 + (-5); -4 + 2; -2 + (-1)
      this.runningSum.push(numSum); // [-2, -2, 1, -4, -2, -3]
  }
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  // making use of the runningSum array [-2, -2, 1, -4, -2, -3]
  // sum[0,5] = runningSum[right] = -3
  // sum[1,5] = runningSum[5] - runningSum[1 - 1] = -3 - (-2) = -1
  // sum[2,5] = runningSum[5] - runningSum[2 - 1] = -3 - (-2) = -1
  // sum[0,2] = runningSum[2] = 1

  // check if the left value is greater than 0
  // if yes, subtract 1 from the value of the left and assign to left
  // else assign 0 to left
  left = left > 0 ? this.runningSum[left - 1] : 0;

  // return the sum of the elements between left and right inclusive (i.e. nums[left] + nums[left + 1] +... + nums[right])
  return this.runningSum[right] - left;
};

// [[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]
const obj = new NumArray([-2,0,3,-5,2,-1]);
const firstRange = obj.sumRange(1, 5);
const secondRange = obj.sumRange(2, 5);
const thirdRange = obj.sumRange(0, 2);
// const firstRange = obj.sumRange(0, 2);
// const secondRange = obj.sumRange(2, 5);
// const thirdRange = obj.sumRange(0, 5);

console.log(firstRange);
console.log(secondRange);
console.log(thirdRange);
