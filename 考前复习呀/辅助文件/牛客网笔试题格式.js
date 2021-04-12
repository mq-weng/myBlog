var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// 获取三行输入的值，输出它们的和
var countLine = 1
var tokens = []
rl.on('line', function(line) {
  tokens.push(line)
  if(countLine === 2) {
    //求和
    console.log(
      tokens.reduce(function(sum, item) {
        return sum + parseInt(item)
      }, 0)
    );
    countLine = 1
    tokens = []
  } else {
    countLine++
  }
})