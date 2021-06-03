let str1 = "(*)"
let str2 = "(()*)"

function test(s) {
    let left = [], star = [];
    for(let i=0;i<s.length;i++){
        if(s[i] == "(") left.push(i);
        if(s[i] == "*") star.push(i);
        if(s[i] == ")") {
            if(left.length == 0){
                if(star.length == 0) return false;
                star.pop();
            }else {
                left.pop();
            }
        }
    }
    if(left.length > star.length) return false;
    while(left.length && star.length){
        if(left.pop() > star.pop()) return false;
    }
    return true;

}

console.log(test(str2));
console.log(str1.replace(/^\(\)/, ""));

t = () => {
    console.log("dfk");
}
console.log(t instanceof Function );