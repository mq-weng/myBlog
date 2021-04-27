// /* 1 */
// function Cat(name) {  //new出对象的（即是kitty） constructor，由kitty 用__proto__指出来的
//     this.name = name;//构造函数
// }
// Cat.prototype.say = function () { //prototype
//     console.log("Hello, " + this.name + "!")
//     return "Hello, " + this.name + "!";
// }
// // 测试:
// var kitty = new Cat('Kitty');
// var doraemon = new Cat('哆啦A梦');
// if (kitty && kitty.name === 'Kitty'
//     && kitty.say
//     && typeof kitty.say === 'function'
//     && kitty.say() === 'Hello, Kitty!'
//     && kitty.say === doraemon.say
// ) {
//     console.log('测试通过!');
// } else {
//     console.log('测试失败!');
// }
// console.log(kitty.__proto__)//{ say: [Function (anonymous)] }
// console.log(kitty.constructor) //[Function: Cat]
// console.log(Cat.prototype)//{ say: [Function (anonymous)] }

// //原型继承（两种方法）原型链如下图
// //new Hua() ----> Hua.prototype ----> Cat.prototype ----> Object.prototype ----> null
// function Hua(props) { 
//     Cat.call(this, props.name)
//     // name: props.name;
//     age: props.age;
// }
// // Hua.prototype = Cat.prototype  //直接这么写会破坏原型链,使Hua和Cat同级了
// function inherits(Child, Parent) {
//     Child.prototype = new Parent();//1
//     // Child.prototype = Object.create(Parent.prototype);//2
//     Child.prototype.constructor = Child 
// }
// // inherits(Hua, Cat)
// inherits1(Hua, Cat)
// let k = new Hua({name:"hh", age: 20})
// console.log(k.say())
// console.log(k instanceof Cat) //验证继承
// console.log(k instanceof Hua)
// console.log(k.__proto__ === Hua.prototype) //true  //验证原型
// console.log(k.__proto__.__proto__ === Cat.prototype)//true







// //class继承
// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     hello() {
//         alert('Hello, ' + this.name + '!');
//     }
// }
// class PrimaryStudent extends Student {
//     constructor(name, grade) {
//         super(name); // 记得用super调用父类的构造方法!
//         this.grade = grade;
//     }

//     myGrade() {
//         alert('I am at grade ' + this.grade);
//     }
// }

//继承1  盗用构造函数，也叫经典继承
function SuperType() {
    this.colors = ["red", "blue", "green"];
   }
   function SubType() {
    // 继承 SuperType
    SuperType.call(this);
   }
   let instance1 = new SubType();
   instance1.colors.push("black");
   console.log(instance1.colors); // "red,blue,green,black"
   let instance2 = new SubType();
   console.log(instance2.colors); // "red,blue,green" 

  
//2. 寄生式
   function createAnother(original){
    let clone = object(original); // 通过调用函数创建一个新对象
    clone.sayHi = function() { // 以某种方式增强这个对象
    console.log("hi");
    };
    return clone; // 返回这个对象
   } 


// 3. 寄生式组合继承
   function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
   }
   SuperType.prototype.sayName = function() {
    console.log(this.name);
   };
   function SubType(name, age){
    SuperType.call(this, name); // 第二次调用 SuperType()
    this.age = age;
   }
   SubType.prototype = new SuperType(); // 第一次调用 SuperType()
   SubType.prototype.constructor = SubType;
   SubType.prototype.sayAge = function() {
    console.log(this.age);
   }; 
   
  class  c1{
      static name1(){
         console.log('static')
      } 
   }
  c2 = new c1()
  c1.name1()

  let pjj = 'a';
var person = 'b';
debugger
