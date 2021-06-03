let obj1 = {
    name: "huhua",
    reg: /f/,
    objj: {
        name: "meimei"
    },
    arr: [1, 2, 3, 5],
    fn: () => {
        console.log("djj");
    }
}
let obj2 = obj1;
// let obj3 = clone(obj1);
obj1.age = 12;

function clone(obj) {
    if (typeof obj !== object) {
        return obj;
    } else {
        if (obj instanceof Array) {

        }
        else if (obj instanceof Function) {

        }
        else if (obj instanceof RegExp) {

        }
    }

}




console.log(obj1);
console.log(obj2);

arr = []
console.log(arr.constructor == Object);