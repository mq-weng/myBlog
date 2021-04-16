let a =new Date()

let obj = {
    name: [1,2,3,4],
    a,
    huahu: {
        name: {
            cle: 112,
            eje: 55,
        }
    }
}

function deeepClone(obj) {
    if(obj === null) return null;
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(typeof obj != "object") return obj;
    let newObj = new obj.constructor;
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            newObj[key] = deeepClone(obj[key])
        }
    }
    return newObj
}

// let obj2 = deeepClone(obj)
let obj2 = {...obj}//也可以直接用解构，不过记得判断数据类型
obj.name = '11111'
console.log(obj, obj2);
console.log(obj === obj2);
console.log(obj.c === obj2.c)
console.log(obj2.name)