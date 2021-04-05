/* 1 */
function Cat(name) {  //new出对象的（即是kitty） constructor，由kitty 用__proto__指出来的
    this.name = name;//构造函数
}
Cat.prototype.say = function () { //prototype
    console.log("Hello, " + this.name + "!")
    return "Hello, " + this.name + "!";
}
// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say
) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}
console.log(kitty.__proto__)//{ say: [Function (anonymous)] }
console.log(kitty.constructor) //[Function: Cat]
console.log(Cat.prototype)//{ say: [Function (anonymous)] }

//原型继承（两种方法）原型链如下图
//new Hua() ----> Hua.prototype ----> Cat.prototype ----> Object.prototype ----> null
function Hua(props) { 
    Cat.call(this, props.name)
    // name: props.name;
    age: props.age;
}
// Hua.prototype = Cat.prototype  //直接这么写会破坏原型链,使Hua和Cat同级了
function inherits(Child, Parent) {
    Child.prototype = new Parent();//1
    // Child.prototype = Object.create(Parent.prototype);//2
    Child.prototype.constructor = Child 
}
// inherits(Hua, Cat)
inherits1(Hua, Cat)
let k = new Hua({name:"hh", age: 20})
console.log(k.say())
console.log(k instanceof Cat) //验证继承
console.log(k instanceof Hua)
console.log(k.__proto__ === Hua.prototype) //true  //验证原型
console.log(k.__proto__.__proto__ === Cat.prototype)//true







//class继承
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}