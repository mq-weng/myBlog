

//保存数据
var test = (function (i) {
    return function () {
       console.log(i *= 2)
    }
})(2)
test(5) // 4


var test1 = (function () {
   let i = 6;
return function () {
    console.log(i++)
}
})()
let t = test1;
t();//6
t();//7


//保护数据
var c = 3;
var d = 4;
function test3(c) {
    test3 = function (d) {
        console.log(c + d++);
    }
}

test3(1);
test3(2);

