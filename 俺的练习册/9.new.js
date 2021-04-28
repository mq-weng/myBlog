
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
    return result instanceof Object ? result : obj  //这是啥？？？？？
}

let p = _new(P);
p.say()