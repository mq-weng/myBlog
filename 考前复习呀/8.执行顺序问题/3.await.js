/*
//20.这里需要注意的是在async1中await后面的Promise是没有返回值的，
//也就是它的状态始终是pending状态，所以在await之后的内容是不会执行的，包括async1后面的 .then。
async function async1 () {
    console.log('async1 start');
    await new Promise(resolve => {
      console.log('promise1')
    })
    console.log('async1 success');
    return 'async1 end'
  }
  console.log('srcipt start')
  async1().then(res => console.log(res))
  console.log('srcipt end')
  // srcipt start,async1 start, promise1, srcipt end,

 // 19.
 async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
    setTimeout(() => {
      console.log('timer1')
    }, 0)
  }
  async function async2() {
    setTimeout(() => {
      console.log('timer2')
    }, 0)
    console.log("async2");
  }
  async1();
  setTimeout(() => {
    console.log('timer3')
  }, 0)
  console.log("start")
  // async1 start, async2, start, async end, timer2, timer3, timer1
  */
 //22.
 async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }
  async function async2() {
    console.log("async2");
  }
  
  console.log("script start");
  
  setTimeout(function() {
    console.log("setTimeout");1
  }, 0);
  async1();
  
  new Promise(resolve => {
    console.log("promise1");
    resolve();
  }).then(function() { 
    console.log("promise2");
  });
  console.log('script end')
  // script start, async1 start, async2, promise1, script end, async1 end, promise2, setTimeout