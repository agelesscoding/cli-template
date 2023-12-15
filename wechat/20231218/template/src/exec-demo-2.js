// `exec` 实现 git clone 操作

const { exec } = require('child_process');

function cloneRepository(repoUrl, destination) {
  exec(`git clone ${repoUrl} ${destination}`, (err, stdout, stderr) => {
    if (err) {
      // 处理错误
      console.error(`执行错误: ${err}`);
      return;
    }
    console.log(stdout);
  });
}

// 使用示例
cloneRepository(
  'https://github.com/agelesscoding/cli.git',
  './exec-demo-2-folder',
);
