
//返回一个0到9之间的乱序

/* 1.利用sort的特性 */
let arr = [0,1,2,3,4,5,6,7,8,9]

function arrRandom(arr) {
	return arr.sort( () => {
		return Math.random() - 0.5; //sort里面传两个参数v1和v2，v1-v2如果正值就交换
	})
}
console.log(arrRandom(arr))

/* 2.  著名的Fisher–Yates（费舍尔耶茨） shuffle 洗牌算法*/
//从原始数组中随机抽取一个新的元素到新数组中
function shuffle(arr){
    var result = [],
        random;
    while(arr.length>0){
        random = Math.floor(Math.random() * arr.length); //随机在数组里面选一个数
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}

console.log(shuffle(arr))

/*  3. Fisher-Yates 洗牌算法的一个变种是 Knuth Shuffle */
//每次从未处理的数组中随机取一个元素，然后把该元素放到数组的尾部，
//即数组的尾部放的就是已经处理过的元素，这是一种原地打乱的算法，
//每个元素随机概率也相等，时间复杂度从 Fisher 算法的 O(n2)提升到了 O(n)

function shuffle1(arr){ //这个歌可以保证每个值都不在自己的位置上
    var length = arr.length,
        temp,
        random;
    while(0 != length){
        random = Math.floor(Math.random() * length ) 
        length--;
        // swap
        temp = arr[length];
        arr[length] = arr[random];
        arr[random] = temp;
    }
    return arr;
}

console.log(shuffle1([0,1,2,3]))