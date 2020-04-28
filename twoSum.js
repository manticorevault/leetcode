/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solution = []
    
    for(let counter = 0; counter < nums.length; counter++) {
        for(let innerCounter = 0; innerCounter < nums.length; innerCounter++) {
            if(counter !== innerCounter) {
                let sum = nums[counter] + nums[innerCounter]
                
                if(sum === target){

                    solution.push(counter)
                    solution.push(innerCounter)
                }
            }
        }
    }
    
    let uniqueIndex = [...new Set(solution)]
    return uniqueIndex
};