let arr = [1,2,3,4,5,6]

function test1(arr) {
    arr.sort(() =>{
        return Math.random() > 0.5 ? 1 : -1
    })
    return arr;
}

function test2(arr) {
    let sit ;
    for(let i = arr.length - 1; i > 1; i--){
        sit = Math.floor(Math.random()*(i - 1));
        [arr[sit], arr[i]] = [arr[i], arr[sit]]
    }
    return arr;
}

function test(arr) {
    let res = [];
    let sit;
    while(arr.length){
        sit = Math.floor(Math.random()*(arr.length));
        res.push(arr[sit])
        arr.splice(sit,1)
    }
    return res
}
console.log(test(arr));