/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const readline = require('readline');

console.clear();

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log(process.argv);

const callback = (answer) => {
	const root = process.cwd();
	const filePath = path.resolve(root, answer);

	if (!answer.includes('.config.js')) {
		console.log('올바르지 않은 형식입니다.');
		rl.close();
		return;
	}

	if (!fs.existsSync(filePath)) {
		console.log('존재하지 않는 파일입니다.');
		rl.close();
		return;
	}

	console.log('파일을 읽고있습니다.');

	const config = fs.readFileSync(filePath, { encoding: 'utf8' });

	const options = eval(config);

	console.log(JSON.stringify(options));

	console.log('감사합니다');
	rl.close();
};

rl.question('어떤 config 파일을 확인해보시겠습니까? ', callback);
