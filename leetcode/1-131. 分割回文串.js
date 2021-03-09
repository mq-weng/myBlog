/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    divide(s);
    return res;
};
let res = [];
let arr = [];
function divide(s) {
    for (let i = 1; i < s.length; i++) {
        if (isPalindrome(s.slice(0, i))) {
            arr.push(s.slice(0, i))
            if (s.length == "") {
                res.push(arr)
            }
            divide(s.slice(i, s.length))
        }
        else {
            arr = []
        }
    }

}

function isPalindrome(s) {
    let i = 0;
    let j = s.length;
    while (i < j) {
        if (s.charAt(i) != s.charAt(j)) {
            return false
        }
        i++;
        j--
    }
    return true
}
console.log(partition("aab"))