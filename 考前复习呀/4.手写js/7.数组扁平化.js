
let arr = [1,2,2,[2,3,4,5,[1,1,2]]];
console.log(arr.toString().split(',').map((x) => {return parseInt(x)}))  //1.转为字符串
console.log(arr.flat(Infinity))  //flat(嵌套层数) Infinity：所有层都去掉  //2. flat

function test(arr) {       //3.递归
    let res = [];
    let toArr = function (arr) {
        arr.forEach(element => {
            element instanceof Array ? toArr(element) : res.push(element)
        });
    }
    toArr(arr)
    return res;
}

console.log(test(arr))