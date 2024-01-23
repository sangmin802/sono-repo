import { exec } from 'child_process';
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const modulePath = fileURLToPath(import.meta.url);
const wDir = dirname(modulePath);
const pkgPath = path.join(wDir, '../package.json');
const semverList = ['major', 'minor', 'patch'];

console.clear();

inquirer
	.prompt([
		{
			type: 'list',
			name: 'semver',
			message: 'Choose Semver',
			choices: semverList
		}
	])
	.then((answers) => {
		const semver = answers.semver;
		const index = semverList.findIndex((i) => semver === i);

		const pkg = fs.readFileSync(pkgPath, {
			encoding: 'utf8'
		});

		const json = JSON.parse(pkg);
		const prevVersion = json.version;

		if (!prevVersion)
			return console.log('package.json의 version 필드를 정의해주세요.');

		const versionArr = prevVersion.split('.');
		versionArr[index] = String(Number(versionArr[index]) + 1);

		const newVersion = versionArr.join('.');

		process.chdir(path.join(wDir, '../'));

		exec(`npm pkg set version=${newVersion}`);

		console.log(`Version changed from ${prevVersion} to ${newVersion}`);
	});
