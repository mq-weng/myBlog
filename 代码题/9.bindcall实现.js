function fn(name) {
    console.log(this);
    console.log(name);
}
let obj = {
    name: "hushu"
}

function call(fn , obj, ...args) {
    obj.fn = fn;
    obj.fn(...args);
    delete obj.fn;
}


function bind(fn, obj, ...args) {
    return function () {
        fn.call(obj,...args)
    }
}

call(fn, obj, "hh")
// bind(fn, obj, "ee")()