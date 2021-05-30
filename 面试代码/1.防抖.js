//在 一个事件 发生 一定时间 之后，才执行 特定动作。
function debounce(fn, delay){
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay)
    }
}