/**
 * 代理的应用场景是不可限量的。开发者使用它可以创建出各种编码模式，比如（但远远不限于）跟
踪属性访问、隐藏属性、阻止修改或删除属性、函数参数验证、构造函数参数验证、数据绑定，以及可
观察对象
 */

//1.proxy代理
const target = {
    name: "huahua",
    age: 22
}
const handler = {
    // 捕获器在处理程序对象中以方法名为键
    /*
    get() {
         return 'handler override'

    }*/
    //有了这些参数，就可以重建被捕获方法的原始行为：
    get(trapTarget, property, receiver) {//目标对象、要查询的属性和代理对象三个参数
        // console.log(trapTarget, property, receiver)//{ name: 'huahua', age: 22 } name { name: 'huahua', age: 22 }
        return trapTarget[property]
    }
}
//只要使用代理就会触发捕获
const proxy = new Proxy(target, handler);
// console.log(target.name)//huahua
console.log(proxy.name)//huahua
// 严格相等可以用来区分代理和目标
console.log(target === proxy); // false 

// 2.Reflect反射

// const handler1 = {
//     get() {
//         return Reflect.get(...arguments);
//     }
// };
const handler1 = {
    get: Reflect.get
}
const proxy1 = new Proxy(target, handler1)

// const proxy1 = new Proxy(target, Reflect)//代理全部
console.log(proxy1.age);

console.log(proxy1);


//一个代理代理另一个
const firstProxy = new Proxy(target, {
    get() {
        console.log("first proxy")
        return Reflect.get(...arguments)
    }
})
const secondProxy = new Proxy(firstProxy, {
    get() {
        console.log("second proxy")
        return Reflect.get(...arguments)
    }
})
// console.log(firstProxy.name)//first proxy  //huahua
console.log(secondProxy.name)//second proxy  //first proxy //huahua
