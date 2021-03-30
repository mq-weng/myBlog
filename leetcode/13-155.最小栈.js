/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.ele = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.ele.push({
        value: val,
        min: this.ele.length === 0 ? val : Math.min(val, this.getMin()) 
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.ele.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.ele[this.ele.length - 1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.ele[this.ele.length - 1].min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */