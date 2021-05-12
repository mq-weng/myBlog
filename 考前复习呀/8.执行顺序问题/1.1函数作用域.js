/*
// 1.因为y没有使用var声明，所以它是一个全局变量，
(function(){
    var x = y = 1;
 })();
 var z;
 console.log(y); // 1
 console.log(z); // undefined
 console.log(x); // Uncaught ReferenceError: x is not defined
 
// 2.
var a, b
(function () {
   console.log(a);
   console.log(b);
   var a = (b = 3);
   console.log(a);
   console.log(b);   
})()
console.log(a);
console.log(b);
// undefined, undefined, 3, 3,undefined,3

// 3.里面的friendName变量提升
var friendName = 'World';
(function() {
  if (typeof friendName === 'undefined') {
    var friendName = 'Jack';
    console.log('Goodbye ' + friendName);
  } else {
    console.log('Hello ' + friendName);
  }
})();
//Goodbye Jack

//4.
function fn1(){
    console.log('fn1')
  }
  var fn2
   
  fn1()
  fn2()
   
  fn2 = function() {
    console.log('fn2')
  }
   
  fn2()
// fn1，TypeError: fn2 is not a function，fn2

// 5.
function a() {
    var temp = 10;
    function b() {
        console.log(temp); // 10
    }
    b();
}
a();

function a() {
    var temp = 10;
    b();
}
function b() {
    console.log(temp); // 报错 Uncaught ReferenceError: temp is not defined
}
a();
// 10，

//6.
var a=3;
function c(){
   console.log(a);
}
(function(){
 var a=4;
 c();
})();
//3

// 7.
function fun(n, o) {
    console.log(o)
    return {
      fun: function(m){
        return fun(m, n);
      }
    };
  }
  var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefind, 0,0,0
  var b = fun(0).fun(1).fun(2).fun(3); //undefind,0,1,2
  var c = fun(0).fun(1);  c.fun(2);  c.fun(3); //undefind,0,1,1

  */
//8.报错？？？？？
f = function() {return true;};   
g = function() {return false;};   
(function() {   
//    if (g() && [] == ![]) {   
      f = function () {return false;};   
      function g() {return true;}   ;
//    } ;  
})();   
console.log(f());
//false