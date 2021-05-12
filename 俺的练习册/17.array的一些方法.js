/*
let arr = [1, 2, 3 ,4];
function fn(x){
    return x*2
}
// 1. map
let x = arr.map((item) => {
    return item*2
})
console.log(x)
//map模拟
_map = (arr, fn) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]))
    } 
    return res;
}
console.log(_map(arr, fn))
*/
let arr1 = [1,[1,2,[1,2]],3,4]
// 2. flat
// console.log(arr1.flat(Infinity))
//转成字符串
function _flat1(arr){
    let str = arr.toString();
    let res = str.split(",").map(x => {
        return parseInt(x)
    })
    return res
}
//递归,先判断是不是数组，是数组的话就递归，不是就push
function _flat(arr) {
    let res = [];
    function fn(arr) {
        arr.forEach(element => {
            element instanceof Array ? fn(element) : res.push(element);
        });
    }
    fn(arr)
    return res;
}
console.log(_flat(arr1))