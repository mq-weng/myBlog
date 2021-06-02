let obj = {
    arr: [1,2,3,4],
    reg: /^1[5|3|8][0-9]{9}$/,
    o: {
        name:"ooo"
    }
}

deepClone = (obj) => {
    if (typeof obj !== "object") return obj;
    switch (Object.prototype.toString.call(obj).slice(8, -1)) {
        case 'Date':
            return new Date(obj);
            break;
        case 'RegExp':
            return new RegExp(obj);
            break;
        case 'String':
            return new String(obj);
            break;
        case 'Number':
            return new Number(obj);
            break;
        case 'Boolean':
            return new Boolean(obj);
            break;
    }
    let res = obj instanceof Array ? [] : {};
    for(item in obj){
        res[item] = deepClone(obj[item]);
    }
    return res;
}

let obj1 = deepClone(obj);
obj.o.name = "77";
console.log(obj);
console.log(obj1);



let regExp = /^1[5|3|8][0-9]{9}$/
console.log('15645914578'.search(regExp));//0
