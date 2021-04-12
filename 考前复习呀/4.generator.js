function* next_id() {
    let id = 0;
    while (id < 6) {
        yield id++
    }
}

//方法1
let ne = next_id();
console.log(ne.next())
console.log(ne.next())
console.log(ne.next())
console.log(ne.next())
console.log(ne.next())
console.log(ne.next())
console.log(ne.next())

console.log(next_id().next())//0  不能这样写,这样写相当于重复调用next_id(),归零了

//方法2
for (item of next_id()) {
    console.log(item)
}

//实现异步

