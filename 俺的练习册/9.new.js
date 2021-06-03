
function P() {
    this.name="juh"
}
P.prototype.say = function () {
    console.log("hello")
}
function _new(P) {
    let obj = {};
    // obj.__proto__ = P.prototype;
    Object.setPrototypeOf(obj, P.prototype)
    let result = P.call(obj);
    return result instanceof Object ? result : obj  //如果构造器没有手动返回对象，则返回第一步的对象
}

let p = _new(P);
p.say()

console.log(typeof Vue)
console.log(typeof Object)