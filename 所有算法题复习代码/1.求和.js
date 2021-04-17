//给定 nums = [2, 7, 11, 15], target = 9
//因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

function sum(nums,target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i] //Map查用get
        } else {
            map.set(nums[i], i)
        }
    }
}

console.log(sum([2, 7, 11, 15], 22))