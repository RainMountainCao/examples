var q = '请输入：';
var users = {
	'admin': '123',
	'user1': '321',
	'user2': '213'
};

process.stdout.write(q + '\n');
								//数据 流
process.stdin.on('data', (input) => {
	input = input.toString().trim();
	if(Object.keys(users).indexOf(input) == -1) {
		process.stdout.write('用户名不存在' + '\n');
		process.stdout.write(q + '\n');
	} else {
		process.stdout.write('成功登陆');
	}
});