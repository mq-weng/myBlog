/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let arr = [];
    let num = 0;
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                arr = pushNoRepeat(arr,nums1[i]);
            }
        }
    }
    console.log(arr);
};

function pushNoRepeat(arr,num){
    if(arr.indexOf(num) == -1){
        arr.push(num)
    }
    return arr;
}

intersection([1, 2], [2, 2])