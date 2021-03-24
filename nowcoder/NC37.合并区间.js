
//没啥毛病
function merge(intervals) {
    // write code here
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    mergeArr(intervals, 0);
    return intervals
}
function mergeArr(arr, i) {
    for (i; i < arr.length - 1; i++) {
        if (arr[i][0] != arr[i + 1][0] && arr[i][1] >= arr[i + 1][0]) {
            arr[i][1] = arr[i + 1][1]
            arr.splice(i + 1, 1)
            mergeArr(arr, i++)
        }
        if (arr[i][0] == arr[i + 1][0]) {
            arr[i][1] = arr[i][1] > arr[i + 1][1] ? arr[i][1] : arr[i + 1][1]
            arr.splice(i + 1, 1)
            mergeArr(arr, i++)
        }

    }
}
console.log(merge([[1,4],[1,5]]));

//vector
/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */
 
/**
 *
 * @param intervals Interval类一维数组
 * @return Interval类一维数组
 */
 function merge1( intervals ) {
    // write code here
    if (intervals.length <= 0) return intervals;
    intervals.sort((a, b) => a.start - b.start);
    let res = [];
    res.push(intervals.shift());
    // console.log(res, intervals)
    while (intervals.length) {
        if (res[res.length - 1].end >= intervals[0].start) {
            if(res[res.length - 1].end < intervals[0].end){
                res[res.length - 1].end = intervals[0].end;
            }
            intervals.shift();
            // console.log("======", res)
        } else {
            res.push(intervals.shift());
        }
    }
 
    return res;
}
console.log(merge1([[10, 20], [10, 15], [20, 60], [80, 100], [150, 180]]));