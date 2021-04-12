//1.
function nan(temp) {
    if (typeof (temp) == "number" && isNaN(temp) == true) {
        return true;
    }
    else {
        return false;
    }
}

console.log(nan("ss"))
console.log(nan(NaN))