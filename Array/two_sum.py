# Given an array of integers num and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

"""
 Example
 Input: num = [2,7,11,15], target = 9
 Output: [0,1]
 Explanation: Because num[0] + num[1] == 9, we return [0, 1].
"""
from typing import List

class Solution:
    def twoSum(self, num: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(num):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []


s = Solution()
print(s.twoSum([2,7,11,15], 26))