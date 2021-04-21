function fn(){};//需要调用的函数
function debunce(fn,delay){
    let flag = null;
    return function(){
        if(flag){
            clearTimeout(flag)
        }
        flag=setTimeout(()=>
            fn.apply(this,arguments),delay)
    }
}

var arr =[1,1,2]
function fun (arr){
    var result =0
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i]
    }
    return result
}
[1,2,3,4] [1,4,9,16]

function fun(arr) {
  return arr.map(x=>x*x)   
}