function sum(a, b, c) {
    return a + b + c
}


function curry1(fn, ...args) {
    console.log(args);
    return fn.length <= args.length ? fn(...args) : curry1.bind(null, fn, ...args);
}

function curry(fn, current) { //current收集所有参数
    return function (...args) {
        let _args = Array.from(args); //接收新的参数
        console.log(_args);
        if (current) {
            _args = _args.concat(current)
        }
        return fn.length > _args.length ? curry(fn, _args) : fn(..._args)
    }
}



fn = curry(sum);
console.log(fn(1)(2)(3));