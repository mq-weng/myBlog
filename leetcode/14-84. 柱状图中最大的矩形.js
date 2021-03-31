/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    let right = heights.length, min ,max, num = 0;
    while (right) {
        right = heights.length;
        for (let i = 0; i <heights.length; i++) {
            min = (i == 0 ? heights[i] : Math.min(heights[i], min))
        }
        // console.log(min)
        max = (num == 0 ? min * right : Math.max(min * right, max));
        if (heights[0] <= heights[right - 1]){
            heights.splice(0, 1) //从左边删除一个
        }
        else {
             heights.pop() //从右边删除一个
        }
        num++;
    }
    return max
};

var largestRectangleArea = function(heights) {
    let stack = [-1];
    let top, area = 0;
    for (let i = 0; i < heights.length; i++) {
        top = stack[stack.length - 1];
        while (top > heights[i]) {
            top = stack[stack.length - 1];
            stack.pop()
            area = Math.max(area, top.value * (i - stack[stack.length - 1].key - 1));
        }
        stack.push({
            value: heights[i],
            key: i,
        })
    }
    
};



const largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = [];
    // Append shadow rectangle (height = 0) to both side
    heights = [0].concat(heights).concat([0]);
    for (let i = 0; i < heights.length; i++) {
        while (stack && heights[stack[stack.length - 1]] > heights[i]) {//存的是下标
            const j = stack.pop();
            maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[j], maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};
  