/**
 * @param {number[]} heights
 * @return {number}
 */

//自己解法
var largestRectangleArea = function(heights) {
    let stack = [{value: -1, key: -1}]
    let top, area = 0;
    heights.push(0);
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 1 && stack[stack.length - 1].value > heights[i]) {
            top = stack[stack.length - 1].value; //栈顶元素
             stack.pop()
            topKey = stack[stack.length - 1].key;
            area = Math.max(area, top * (i - topKey - 1));
        }
        stack.push({ //入栈
            value: heights[i],
            key: i,
        })
    }
    return area
};

//dalaode
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
  


