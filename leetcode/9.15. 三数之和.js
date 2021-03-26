//双指针
var threeSum = function (nums) {
    let res = [], left, right;
    nums.sort((a, b) => { return a - b })
    console.log(nums)
    if (nums.length < 3){
        return []
    }
    for (let i = 0; i < nums.length-2; i++) {
        if (nums[i] > 0){
            return res
        }
        if (i > 0 && nums[i] == nums[i-1]) {
            continue
        }
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            if (0 == nums[left] + nums[right] + nums[i]) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
				while (left < right && nums[left] == nums[left - 1]) {
					left++;
				}
                while (left < right && nums[right] == nums[right+1]) {
                    right--
                }
            }
            else {
                0 < nums[left] + nums[right] +nums[i] ? right-- : left++
            }
        }
    }
    return res
};

console.log(threeSum([-2,0,1,1,2]))