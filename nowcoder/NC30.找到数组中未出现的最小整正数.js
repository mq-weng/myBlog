function minNumberdisappered(arr) {
    // write code here
    arr.sort();
    arr = arr.filter(item => {
        return item >= 1
    }) 
    console.log(arr)
    let i = 1;
    if(arr[0] == 1){
        for(i; i <= arr.length; i++){
            if(arr[i-1]+1 == arr[i] && i <= arr.length){
                continue
            }
            else{
                i++;
                break
            }
        }
    }
    return i;

}
console.log(minNumberdisappered([-1,0.3,1,2.1, 3, 4, -2]))