let arr = [1,2,2,4,4,5,3,3];

function test1(arr) {
    let set = new Set(arr)
    set = Array.from(set);
    return set;
}

function test2(arr) {
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], i);
    }
    map = Array.from(map);
    map = map.map((item) => {
        return item[0]
    })
    return map;
}

//利用indexof
function test(arr) {
    let res = [];
    for(let i=0; i < arr.length; i++){
        if(res.indexOf(arr[i]) == -1){
            res.push(arr[i])
        }
    }
    return res;
}
console.log(test(arr));