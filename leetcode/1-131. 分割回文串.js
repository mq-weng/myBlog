/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {

};
let res = [];
let arr = [];
let str;
function divide(s) {
    for (let i = 0; i < s.length; i++) {
        str = s.slice(0, i);
        // isPalindrome(str) ? arr.push(str) : divide();
        if (isPalindrome(str)) {
            arr.push(str)
            
            divide(s.slice(i, s.length))
        }
        else {
            for (let j = i; j < s.length; j++) {
                str = s.slice(i, j)
                if (isPalindrome(str)) {
                    arr.push(str)
                    divide(s.slice(i, s.length))
                }
            }
        }
    }
}

function isPalindrome() {

    return true
}