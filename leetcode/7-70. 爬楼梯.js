//类似斐波那契数列
var climbStairs = function (n) {
    let floor1 = 1;
    let floor2 = 2;
    let num;
    if (n <= 2) return n;
    for (let i = 3; i <= n; i++) {
        num = floor1 + floor2;
        floor1 = floor2;
        floor2 = num;
    }
    return num
};



console.log(climbStairs(27))