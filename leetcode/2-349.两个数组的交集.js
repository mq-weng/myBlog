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
                // arr = deletRepeat(arr,nums1[i]);
                for (let k = 0; k < arr.length; k++) {
                    if (arr == []) {
                        arr.push(nums1[i])
                    }
                    if (arr[k] != nums1[i]) {
                        if (num == arr.length) {
                            arr.push(nums1[i])
                            console.log(arr);
                            num = 0;
                        }
                        num++;
                    }
                }
            }
        }
    }
    console.log(arr);
};

intersection([1, 2], [2, 2])