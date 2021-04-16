let tr = {
    fn() {
        let num = 0;
        return {
            count() {
                num++
            },
            getNum(){
                return num;
            }
        }
    }
}
// let fn1 = tr.fn()
// fn1.count()
// fn1.count()
// console.log(fn1.getNum());//2
var fn = require('../辅助文件/2-1闭包模块化')
fn.count()
fn.count()
console.log(fn.getNum());