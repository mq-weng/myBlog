//判断回文串
function isPalindrom(str) {
    const len = str.length;   
    console.log(len/2)
    for (let i = 0; i < len/2; i++) { //对称性 /2
        if(str[i] != str[len - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrom('ada'));

//真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
function test(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j && str[i] === str[j]) {
        i++;
        j--;
    }
    if(isHuiwen(i+1, j)) {//不等就开始略过
        return true;
    }
    if(isHuiwen(i,j-1)){
        return true;
    }

    function isHuiwen(i,j) {
        while(i < j){
            if(str[i] != str[j]) return false;
            i++;
            j--;
        }
        return true;
    }
    return false;
}

console.log(test('adada'))