//给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

//双指针
function threeSum(nums) {
    nums.sort((a, b) => {
        return a - b;
    })
    console.log(nums)
    let l, r = nums.length - 1;
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        l = i + 1;
        if (i > 0 && nums[i] === nums[i - 1]) { //// 如果遇到重复的数字，则跳过
            continue;
        }
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] == 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (nums[l] == nums[l-1]) {//left去重
                    l++
                }
                while (nums[r] == nums[r+1]) { //right去重
                    r--
                }
                continue;
            }
            else if (nums[i] + nums[l] + nums[r] < 0) { //下面这两句可以合并为一句
                l++;
            }
            else{
                r--;
            }
            //else 0 < nums[left] + nums[right] +nums[i] ? right-- : left++ 
        }
    }

    return res;
}


console.log(threeSum([-2, 0,0,0,0, 1, 1, 2]))