
function bindThis(f, oTarget) {
    return f.bind(oTarget)
}
//测试用例,bindThis不是立即执行的,所以用return f.bind()后还要调用
function () {
     var r = bindThis(function(a, b){return this.test + a + b}, {test: 2})(2, 3); return r === 7; }
