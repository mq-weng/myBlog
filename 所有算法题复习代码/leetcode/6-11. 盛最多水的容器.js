//超时土房子
var maxArea1 = function (height) {
    let area = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            area = Math.max((j - i) *(Math.min(height[i],height[j])), area)
        }
    }
    return area;
};

//
var maxArea = function (height) {
    let i = 0;
    let j = height.length-1;
    let area = 0;
    let max = 0;
    while (i < j) {
        // console.log(area);
        max = (j - i) * (Math.min(height[i], height[j]));
        area = Math.max(max, area);
        height[i] < height[j] ? i++ : j--
    }
    return area;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]
));