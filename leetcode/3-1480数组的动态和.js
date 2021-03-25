/**
 * @param {number[]} nums
 * @return {number[]}
 */
//土方子
 var runningSum = function(nums) {
    let res = []
    let num = 0
    for(let i =0 ;i < nums.length; i++){
        if(i == 0){
            res.push(nums[0])
            num = nums[0]
        }
        else{
            num += nums[i]
            res.push(num)
        }
    }
    return res
};
//特效药
function run(arr){
   return arr.reduce((total,prev) => {
        total.push(total+prev)
        return total
    })
}
console.log(run([1,1,1,1,1]));
