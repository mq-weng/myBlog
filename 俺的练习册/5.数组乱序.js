function test1(arr) {
    arr.sort(() => {
        return Math.random() > 0.5 ? -1 : 1
    })
    return arr;
}

function test2(arr) { //随便生成一个位置
    let res = [];
    while (arr.length > 0) {
        let i = Math.floor(Math.random() * arr.length)
        res.push(arr[i]);
        arr.splice(i, 1);
    }
    return res
}

function test3(arr) { //拿最后一个和前面的随机一个进行交换
    let x;
    console.log(arr)
    let j = arr.length - 1;
    console.log(j)
    while (j != 0) {
        j--;
        let random = Math.floor(Math.random() * j);
        x = arr[random];
        arr[random] = arr[j];
        arr[j] = x;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(test1(arr))
// console.log(test2(arr))
console.log(test3(arr))