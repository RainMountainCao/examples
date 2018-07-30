//计算器
//参数
const args = process.argv.slice(2);
//分析
if (args.length !== 3) {
	console.log();
	throw new Error("参数  不合法");
}
let para1 = args[0];
let operator = args[1];
let para2 = args[2];

let result = eval(`${para1} ${operator} ${para2}`);

console.log(result);