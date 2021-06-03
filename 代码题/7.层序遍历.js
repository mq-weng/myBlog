


var levelOrder = function (root) {
    let res = [];
    if (!root) {
        return res
    }
    let queue = [];
    queue.push(root);
    while(queue.length){
        let len = queue.length;  //这里必须存一下，不然底下的push会改变len；
        res.push([]);
        for (let i = 0; i < len; i++) {
        let node = queue.shift();
        res[res.length - 1].push( node.val);
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    }
    return res;
};