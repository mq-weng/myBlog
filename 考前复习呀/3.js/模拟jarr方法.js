let arr = [1,2,3,4,[4,5,6],[55,[4,1]]]
let num = 0;
console.log(JSON.stringify(arr).replace(/\[|\]/g,"").split(",").reduce((num, x) =>{return num = parseInt(x)+parseInt(num)}))

//模拟字符串repeat
let str = 'abc'
let n = 3;
console.log((new Array(n + 1)).join(str))

//map
let arr1 =[1,2,4,3];
arr1.map((x) => {
    return x+1
})
arr1.some((x) => {return x > 2})
arr1.findIndex((x) => { return x > 2});
// arr1.copyWithin(1, 0, 1)
arr1.forEach((x) => {
    x=x+2
    console.log(x)
})
let arr2 = arr1.reduce((total, item) => {return total = item +total}, 2)
console.log(arr1);
console.log(arr2)


//分割千分位
let format = n => {
    let num = n.toString() // 转成字符串
    let decimals = ''
        // 判断是否有小数
    num.indexOf('.') > -1 ? decimals = num.split('.')[1] : decimals
    let len = num.length
    if (len <= 3) {
        return num
    } else {
        let temp = ''
        let remainder = len % 3
        decimals ? temp = '.' + decimals : temp
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp
        }
    }
}
console.log(format(12323.33))  // '12,323.33'
