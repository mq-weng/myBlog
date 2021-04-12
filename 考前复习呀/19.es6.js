let temp1 = Symbol('ss');
let temp2 = Symbol('ss');
console.log(temp1 == temp2); //false
console.log(typeof (temp2)); //symbol

var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";
 //symbol 不能用for in 迭代
for (var i in obj) {
   console.log(i); // logs "c" and "d"
}
//当使用 JSON.stringify() 时，以 symbol 值作为键的属性会被完全忽略：
console.log(JSON.stringify({[Symbol("foo")]: "pdodo"}))