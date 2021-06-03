function fn(paams) {
    let s = 3
    function fn1(){
        s++;
        return s;
    }
    let result = fn1()
    fn1 = null;
    return result;
}
console.log(fn());
