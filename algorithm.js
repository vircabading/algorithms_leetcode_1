import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var result_array = [];

    for (let first=0; first<nums.length; first++) {
      for (let second=first+1; second<nums.length; second++) {
        if (nums[first] + nums[second] == target) {
          return [first,second];
        }
      }
    }
  }

console.log("Input: nums = [2,7,11,15], target = 9 || output:", twoSum([2,7,11,15], 9));

console.log("Input: nums = [3,2,4], target = 6 || output:", twoSum( [3,2,4] , 6));

console.log("Input: nums = [3,3], target = 6 || output:", twoSum( [3,3] , 6));