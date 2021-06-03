let root = {
    val: 1,
    left:
    {
        val: 2,
        left: {
            val: 3
        },
        right:{
            val: 4
        }
    },
    right:
    {
        val: 5
    }
}

function deep(root) {
    let res = []
    let d = (r) => {
        if (!r) return res;
        if (r.val) res.push(r.val);
        if (r.left) d(r.left);
        if (r.right) d(r.right);
    }
    d(root);
    return res
}
console.log(deep(root));