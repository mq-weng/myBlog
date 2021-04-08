//暴力，排序，验证相等
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    s = s.split("");
    t = t.split("");
    s.sort();
    t.sort();
    s = s.toString();
    t = t.toString();
    return s == t
};

//哈希表