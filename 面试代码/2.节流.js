//在 一定时间 之内，限制 一个动作 只 执行一次 

/* 1.定时器 */
function throttle(fn, time) {
    let timer;
    return function () {
        if(timer) return;
        timer = setTimeout(() => {
           fn();
           timer = null; 
        }, time)
    }
}

/* 2.时间戳 */
function throttle1(fn, time) {
    let pre = Date.now();
    return function () {
        let now = Date.now();
        if(now - pre >= time){
            fn();
            pre = Date.now();
        }
    }
}