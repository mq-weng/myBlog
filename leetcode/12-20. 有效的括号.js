/**
 * @param {string} s
 * @return {boolean}
 */

//replace替换
 var isValid = function(s) {
    if(s.length % 2 != 0) return false
    while (s.length) {
        temp = s;
        s = s.replace('()', "");
        s = s.replace('{}', "");
        s = s.replace('[]', "");
        if (s == temp) return false
    }
    return true
};


//较优解
var isValid = function(s) {
    let arr = []
    let len = s.length
    if (len%2) return false
    for (let i = 0; i < len; i++) {
        let letter = s[i]
        switch(letter) {
            case "(": {
                arr.push(letter)
                break;
            }
            case "[": {
                arr.push(letter)
                break;
            }
            case "{": {
                arr.push(letter)
                break;
            }
            case ")": {
                if (arr.pop() !== "(") return false
                break;
            }
            case "]": {
                 if (arr.pop() !== "[") return false
                break;
            }
            case "}": {
                if (arr.pop() !== "{") return false
                break;
            }
        }
    }
    return !arr.length

};


console.log(isValid("()[]{}"))