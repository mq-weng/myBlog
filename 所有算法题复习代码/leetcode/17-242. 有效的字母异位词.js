//暴力，排序，验证相等
//时间复杂度O(nlogn) 
//排序的时间复杂度为 O(nlog⁡n)
var isAnagram1 = function(s, t) {
    return t.length == s.length && [...s].sort().join("") == [...t].sort().join("")
};

//哈希表
//时间复杂度：O(n)，其中 n 为 s 的长度。
var isAnagram = function(s, t) {
    let hash = {};
    for ({char,index} in s) {
        hash[char] = index
    }
    console.log(char)
};


console.log(isAnagram1("huahua","auhu")) //false
console.log(isAnagram1("huahua","auhahu")) //true
isAnagram("huahua","auhahu")