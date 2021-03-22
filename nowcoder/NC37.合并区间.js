function merge(intervals) {
    // write code here
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    mergeArr(intervals, 0);
    return intervals
}
function merge(intervals) {
    // write code here
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    mergeArr(intervals, 0);
    return intervals
}
function mergeArr(arr, i) {
    for (i; i < arr.length - 1;) {
        if (arr[i][1] > arr[i + 1][0]) {
            if (arr[i][0] == arr[i][0]) {
                if (arr[i][1] > arr[i + 1][1]) {
                    arr[i][1] = arr[i + 1][1]
                    arr.splice(i + 1, 1)
                    mergeArr(arr, i++)
                }
                else{
                    arr.splice(i + 1, 1)
                }
            }
            else {
                arr[i][1] = arr[i + 1][1]
                arr.splice(i + 1, 1)
                mergeArr(arr,i++)
            }
        }
    }
}
console.log(merge([[10,30],[20,60],[80,100],[150,180]]));