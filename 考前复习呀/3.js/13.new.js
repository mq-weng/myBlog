
function Parent(name) {
    this.name = name;
    this.age = 20   
}
Parent.prototype.sayhi = function(){
    console.log('hello')
}

function new1(Parent,...arguments) {
    let obj = {};
    obj.__proto__ = Parent.prototype;
    let res = Parent.call(obj,...arguments)
    return typeof result === 'obj'? result : obj;
}

let child = new1(Parent,'huhu')
console.log(child)
console.log(child instanceof Parent)
let children= new Parent('huhu')
console.log(children)
console.log(children instanceof Parent)