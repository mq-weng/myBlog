/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//俺的暴力大法
 var maxSlidingWindow = function(nums, k) {
    let p = [];
    let temp = nums.slice(k);
    let win = nums.splice(0, k);
    for(let i = 0; i <= temp.length; i++) {
        p.push(max(win));
        win.push(temp[i]);
        win.shift();
    }
    return p;
};

function max (arr) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++){
        res = Math.max(arr[i], res); 
    }
    return res;
}

//人家优秀代码  双端队列（Monotonic queue）
const maxSlidingWindow = (nums, k) => {
    const res = [];
    const q = [];
    for (let i = 0; i < nums.length; i++) {
      while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
      q.push(nums[i]);
  
      // When i + 1 - k >= 0, the window is fully overlapping nums
      const j = i + 1 - k; //控制每个窗口的起点0，1，2·····
      if (j >= 0) { //得形成一个窗口才能得到最大的值
        res.push(q[0]);    //q[0]是当前窗口的最大值
        if (nums[j] === q[0]) q.shift(); // 窗口的起点值，相等时窗口满了
      }
    }
    return res;
  };