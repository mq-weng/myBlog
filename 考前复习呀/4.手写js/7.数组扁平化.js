
let arr = [1, 2, 2, [2, 3, 4, 5, [1, 1, 2]]];
console.log(arr.toString().split(',').map((x) => { return Number(x) }))  //1.转为字符串
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

function flatten(arr) {  //4. join和split
    return arr.join(',').split(',').map(function (item) {
        return parseInt(item);
    })
}

//some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
[].concat(...[1, 2, 3, [4, 5]]);  // [1, 2, 3, 4, 5]
function flatten1(arr) {                    //5.  用some 和解构
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log('flatten1')
console.log(flatten1(arr))

// console.log(arr.some(x => Array.isArray(x)))
JSON.s