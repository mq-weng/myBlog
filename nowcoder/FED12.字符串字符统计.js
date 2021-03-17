function count(str) {
    let x;
    for(let i=1; i <= str.length; i++){
        x = str.slice(i-1,i);
    }
}
console.log(count('hello world'))