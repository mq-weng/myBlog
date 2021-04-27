
/* 1.Generator，进行异步任务的封装 */
const person = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                name: name,
            }
            resolve(data);
        }, 3000)
    })
}
function* gen() {
    const data = yield person('huahua')
    console.log(data)
}
const g = gen();
const next1 = g.next();
console.log(next1) //{ value: Promise { <pending> }, done: false }
next1.value.then(data => {
    g.next(data) //{ name: 'huahua' }
  })

  /*  aync await  */
async function test() {
     let a = await setTimeout(console.log, 3000, 12)
     console.log(1) 
  }
test()