/*
// 1. 注意要执行then的话，statue必须不是pending!!!
const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
  });
  promise.then(() => {
    console.log(3);
  });
  console.log(4);
// 1 2 4 

// 2. 直接打印promise1，会打印出它的状态值和参数。
const promise1 = new Promise((resolve, reject) => {
    console.log('promise1')
    resolve('resolve1')
  })
  const promise2 = promise1.then(res => {
    console.log(res)
  })
  console.log('1', promise1);
  console.log('2', promise2);
//promise1 1 {<resolve>:'resolve1'} 2 {<pending>} resolve1

// 3. 还是要注意，statue为pending时不执行then
const promise3 = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  promise3.then((res) => {
    console.log(res);
  });
  console.log(4);
  // 1 2 4 timerStart timerEnd success
  
 // 4. 
 Promise.resolve().then(() => {
    console.log('promise1');
    const timer2 = setTimeout(() => {
      console.log('timer2')
    }, 0)
  });
  const timer1 = setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(() => {
      console.log('promise2')
    })
  }, 0)
  console.log('start');
  // start promise1 timer1 promise2 timer2
  
 // 5. 状态凝固了，下面的reject和resolve不会执行，自然不会catch
 const promise = new Promise((resolve, reject) => {
    resolve('success1');
    reject('error');
    resolve('success2');
});
promise.then((res) => {
    console.log('then:', res);
}).catch((err) => {
    console.log('catch:', err);
})
//then: success1

// 6.then方法接受的参数是函数，而如果传递的并非是一个函数，它实际上会将其解释为then(null)，这就会导致前一个Promise的结果会传递下面。
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
// 1 

 // 7.  
 const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
//promise1 {pendding} promise2 {pending}  error!!! promise1 {resolve: success}  promise2 { <rejected> Error: error!!!}

// 8. return 2会被包装成resolve(2)，被最后的then打印输出2
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });
// 1 2

// 9. 返回任意一个非 promise 的值都会被包裹成 promise 对象，因此这里也被包裹成了return Promise.resolve(new Error('error!!!'))
Promise.resolve().then(() => {
  return new Error('error!!!')
}).then(res => {
  console.log("then: ", res)
}).catch(err => {
  console.log("catch: ", err)
})
//then:  Error: error!!!

// 10. .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
const promise = Promise.resolve().then(() => {
  return promise;
})
promise.catch(console.err)
//UnhandledPromiseRejectionWarning: TypeError: Chaining cycle detected for promise #<Promise>

// 11. .then 或.catch 的参数期望是函数，传入非函数则会发生值透传
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
// 1 

// 12.
Promise.reject('err!!!')
  .then((res) => {
    console.log('success', res)
  }, (err) => {
    console.log('error', err)
  }).catch(err => {
    console.log('catch', err)
  })
// error: err!!!
// 这样就被catch捕获了
Promise.resolve()
  .then(function success (res) {
    throw new Error('error!!!')
  }, function fail1 (err) {
    console.log('fail1', err)
  }).catch(function fail2 (err) {
    console.log('fail2', err)
  })
//Error: error!!!

// 13. ？？？？？
Promise.resolve('1')
  .then(res => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })
Promise.resolve('2')
  .finally(() => {
    console.log('finally2')
  	return '我是finally2返回的值'
  })
  .then(res => {
    console.log('finally2后面的then函数', res)
  })
// 1 finally2  finally finally2后面的then函数 2
*/
//14.
function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
Promise.all([runAsync(1), runAsync(2), runAsync(3)]).then(res => console.log(res))
// 1 2 3 [1，2，3]
