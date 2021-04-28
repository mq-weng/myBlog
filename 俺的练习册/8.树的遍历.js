let tree = [
    {name: "黑龙江省", children:[{name: "绥化市", children: [{name: "安达"}]}]},
    {name: "吉林省", children: [{name: "吉林市"}]},
    {name: "河北省"}
]

//深度优先DFS
function sTree(tree) {
   tree.forEach((item) => {
    console.log(item.name)
        if(item.children) {
            sTree(item.children)
        }
    })
}
sTree(tree);

//广度优先BFS,可以利用
function gTree(tree) {
    tree.forEach(item => {
        console.log(item.name)
        if(item.children){

        }
    })
}