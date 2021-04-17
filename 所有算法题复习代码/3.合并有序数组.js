/*nums1 = [1,2,3,0,0,0], m = 3 初始化m的数量
nums2 = [2,5,6], n = 3
输出: [1,2,2,3,5,6] */

//es6解构
function mergeEs6(nums1, m, nums2, n) {
     nums1.splice(m, n, ...nums2); 
     nums1.sort((a, b) => {
         return a-b;
     })
}
//双指针
function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0 ) {
        if(nums2[j] > nums1[i]){
            nums1[k] = nums2[j];
            j--;
            k--;
        }
        else {
            nums1[k] = nums1[i];
            k--;
            i--;
        }
    }
    while(j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
}
nums = [1,2,3,0,0,0,0]
mergeEs6(nums,3,[2,5,6,9],4)
console.log(nums)

nums2 = [1,2,3,0,0,0]
merge(nums2,3,[2,5,6],3)
console.log(nums2)