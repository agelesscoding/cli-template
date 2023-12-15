const { exec } = require('child_process');

// `exec` 回调函数应用
exec('ls', (err, stdout, stderr) => {
  if (err) {
    // 处理错误
    console.error(`执行错误: ${err}`);
    return;
  }
  console.log(`标准输出: ${stdout}`);
  console.error(`标准错误输出: ${stderr}`);
});
