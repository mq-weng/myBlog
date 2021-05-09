
let p = new Promise((resolve, reject) => {
    let time = Math.random()
    if(time < 0.5){
        resolve("成功")
    }else{
        reject("失败")
    }
})
p.then((res) => {
    //then接两个fn参数，一个是成功回调，一个是失败回调
    console.log(res)
})
p.catch(() => {
    console.log("由于随机数大于等于0.5")
})