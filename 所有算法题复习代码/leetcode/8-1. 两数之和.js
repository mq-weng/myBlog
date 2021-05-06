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

//哈希
var twoSum1 = function(nums, target) {
    let map = new Map();
    for(let i = 0, len = nums.length; i < len; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }else{
            map.set(nums[i], i);
        }
    }
    return [];
};
console.log(twoSum1([3,3,3,4,7],6));