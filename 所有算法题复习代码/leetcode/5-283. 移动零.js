var moveZeroes = function (nums) {
    let length = nums.length;
    let num = 0;
    for (let i = 0; i < length - num;) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            console.log(nums);
            nums.push(0)
            num++
        }
        else {
            i++
        }
    }
    return nums;
};

function moveZeroes1(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++;
            if (i != j) {
                nums[i] = 0;
            }
        }
    }
    return nums

}



console.log(moveZeroes1([0, 0, 1]));