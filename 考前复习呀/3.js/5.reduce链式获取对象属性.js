
//reduce一般被用来累加 arr.reduce((初始值，现值)=>{return },初始值)
const obj = {
    name: 'huahua',
    info: {
        address: {
            location: '北京'
        }
    }
}

//let location = obj.info.address.location;

const arr = ['info', 'address', 'location']
let lo = arr.reduce((newObj, k) => { return newObj[k] }, obj)
console.log(lo)

const arrStr = 'info.address.location';
const loc = arrStr.split('.').reduce((newObj, k) => newObj[k], obj)
console.log(loc)

//
let ob = {
    age: 11,
    age1: 12,
    age3: 0
}
let key = Object.keys(ob)

console.log(Object.assign(ob))
