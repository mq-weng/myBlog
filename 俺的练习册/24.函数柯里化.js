function sum(a,b,c) {
    return a+b+c;
}

function curry(fn, current) {
    return function (...args) {
        let _args = Array.from(args);
        if(current){
            _args = _args.concat(current);
        }
        if(fn.length > _args.length){
            return curry(fn, _args)
        }
        return fn(..._args); 
    }
}

let fn = curry(sum);
console.log(fn(1)(2)(3));