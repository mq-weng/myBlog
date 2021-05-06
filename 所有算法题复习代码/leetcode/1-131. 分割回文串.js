/**
 * @param {string} s
 * @return {string[][]}
 */
let res = [];
let arr = [];
let num = 0;
var partition = function (s) {
    divide(s);
    return res;
};
function divide(s) {//这个方法前面分完的保存不下来
    for (let i = 1; i <= s.length; i++) {
        if (isPalindrome(s.slice(0, i)) == true) {
            console.log(s.slice(0, i))
            arr.push(s.slice(0, i))
            divide(s.slice(i, s.length))
        }
        else{
            continue
        }
        if (i == s.length){
            res.push(arr)
        }
        arr =[]
    }

}

function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s.charAt(i) != s.charAt(j)) {
            return false
        }
        i++;
        j--;
    }
    return true
}
console.log(partition("aabb"))
