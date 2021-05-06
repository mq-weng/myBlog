/**
 * @param {string} s
 * @return {boolean}
 */

//1zh
 var isPalindrome = function (s) {
    s = filterNumChar(s).toLowerCase();
    return s == reverse(s);
};

function filterNumChar(s) {//过滤出字母和数字
    return s.replace(/[^a-zA-Z0-9]/g,"")
}
function reverse(s) {//翻转字符串
    return s.split("").reverse().join("")
}



//简写
var isPalindrome = function(s) {
    const newS = s.replace(/[^a-zA-Z0-9]/ig, '').toLowerCase();
    return newS === newS.split('').reverse().join('')
}

console.log(isPalindrome(":lanac") );