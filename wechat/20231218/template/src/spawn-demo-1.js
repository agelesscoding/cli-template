// 实时读取命令的输出

const { spawn } = require('child_process');

const child = spawn('ls', ['-lh', '/usr']);

child.stdout.on('data', (data) => {
  console.log(`标准输出: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`标准错误输出: ${data}`);
});

child.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
