// Given an array num, define a running sum of an array as runningSum[i] = sum(num[0]...num[i]);
// Constraints:
// - The number of nodes in the list is in the range [1, 1000]
// - The value of each element in the array is in the range [-10^6, 10^6]
// Input: num = [3, 1, 2, 10, 1]
// Output: [3, 4, 6, 16, 17]
function runningSum(num) {
  // overriding the original array
  for (let i = 1; i < num.length; i++) {
    num[i] = num[i - 1] + num[i];
  }

  return num;
}

function runningSum2(num) {
  let result = [];

  // initialize the the result array with the value of the first element
  let ans = num[0];
  
  for (let i = 0; i < num.length; i++) {
    // push the result element into the result array
    result.push(ans);

    // add the next element to the previous answer 
    ans = ans + num[i + 1];
  }
  return result;
}

console.log(runningSum([3, 1, 2, 10, 1]));
console.log(runningSum2([3, 1, 2, 10, 1]));
