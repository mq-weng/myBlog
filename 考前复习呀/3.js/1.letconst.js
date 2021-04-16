var a = 3;
var a = 5; //只有var可以重复声明

b = 3;  //只有let 有变量提升
var b;


for(var i = 0; i < 3; i++){
    (function (i) {
        console.log(i)//解决输出全是3
   })(i)
}
console.log(i) //var声明会渗透到循环体外面

const s = 'ddd' //const 声明就赋值