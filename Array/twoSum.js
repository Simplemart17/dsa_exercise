// Given an array of integers num and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * Example
 * Input: num = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because num[0] + num[1] == 9, we return [0, 1].
*/
//Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
const twoSumA = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }

  // when no number in the array add up to the target
  return [];
}

//Hash Table (optimized)
// Time Complexity: O(n)
// Space Complexity: O(n)
const twoSumB = (num, target) => {
  const hash = {};

  for (let i = 0; i < num.length; i++) {
    // get the current number
    let currentNumber = num[i];

    // get the complementary number to add up to the target
    const complementaryNum = target - currentNumber;

    // check if the object contains complementary number
    if (hash[complementaryNum] !== undefined) {  
      // get the index of the seen number and that of the complementary number

      return [hash[complementaryNum], i];
    }

    // update the object (hash table) to include the number along with its index e.g - {"2": 0}
    hash[num[i]] = i;
  }

  // when no numbers in the array add up to the target
  return [];
}

console.log(twoSumA([2,7,11,15], 26));
console.log(twoSumB([2,7,11,15], 26));
