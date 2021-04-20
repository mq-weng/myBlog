let arr = [1,2,2,[2,3,4,5,[1,1,2]]];
console.log(arr.toString())


function test(arr) {
    arr.forEach(element => {
        element
    });
    return arr;
}
console.log(test(arr))
