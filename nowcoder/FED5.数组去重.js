//俺的笨蛋方法
Array.prototype.uniq = function () {
    let arr = [];
    let num = 0;
    if(this.length>0){
        arr.push(this[0])
        for (let i = 1; i < this.length; i++) {
            if (typeof this[i] == 'number' && isNaN(this[i])) {
                num++
                console.log(this[i]);
            }
            if (this[i] == {}) {
                arr.push(this[i])
            }
            else {
                if (arr.indexOf(this[i]) == -1) {
                    if (typeof this[i] == 'number' && isNaN(this[i])) {
                        if (num == 1) {
                            arr.push(NaN)
                        }
                    }
                    else {
                        arr.push(this[i])
                    }
                }
            }
        }
    }
    return arr
}
// function () {
//     var a = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq(); return a.length === 10 && a[1] === false && a[0] === true && a[3] === undefined && a[2] === null && isNaN(a[4]);
// }
//题解方法
Array.prototype.uniq1 = function () {
    return Array.from(new Set(this));
}
console.log([false, true, false, undefined, null, null, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq1())