var obj = {
    name: "xixi",
    age: "22",
    brother: {
        name: "huahua",
        age: "8",
    },
    arr: [
        1, 2, 3, 2
    ]
};
function deep1(obj) { //练习
    let res;
    if (typeof obj == "object") {
        res = obj.constructor == Array ? [] : {};
    }
    else {
        return obj
    }
    for (o in obj) {
        if (typeof obj[o] == "object") {
            res[o] = deep(obj[o])
        }
        else {
            res[o] = obj[o] 
        }
    }
    return res;
}

let deep = function (arr) {
    let res;
    if (typeof arr == "object") {
        res = arr.constructor == Array ? [] : {};
    }
    else {
        return arr
    }
    for (i in arr) {
        if (typeof arr == "object") {
            res[i] = deep(arr[i]);
        }
        else {
             res[i] = arr[i]
        }
    }
    return res
}


let obj1 = deep(obj)
obj.age = 0;
console.log(obj)
console.log(obj1);