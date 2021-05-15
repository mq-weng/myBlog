/*
1: 1
2: 2;
3: f(1) + f(2);
4: f(2) + f(3);
*/
var climb = function (n) {
    let floor1 = 1;
    let floor2 = 2;
    let num;
    if(n <= 2)return n;
    for(let i=2;i < n; i++){
        num = floor1 + floor2;
        floor1 = floor2;
        floor2 =num;
    }
    return num;
}
console.log(climb(5));