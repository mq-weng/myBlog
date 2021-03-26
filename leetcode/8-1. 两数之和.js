var twoSum = function (nums, target) {
    let res = [];
    let temp;
    for (let i = 0; i < nums.length; i++) {
        temp = nums.indexOf(target - nums[i]);
        if (temp >= 0 && i != temp) {
            res.push(temp);
            res.push(i)
            return res
        }
    }
};
console.log(twoSum([3,3,3,4,7],6));