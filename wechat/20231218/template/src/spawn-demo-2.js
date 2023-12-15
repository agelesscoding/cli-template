// `exec` 实现 git clone 操作

const { spawn } = require("child_process");

function cloneRepository(repoUrl, destination) {
  const gitClone = spawn("git", ["clone", repoUrl, destination]);

  // 处理标准输出
  gitClone.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  // 处理标准错误输出
  gitClone.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  // 处理结束
  gitClone.on("close", (code) => {
    if (code === 0) {
      console.log("Git 克隆成功");
    } else {
      console.error(`Git 克隆过程退出，退出码 ${code}`);
    }
  });
}

cloneRepository(
  'https://github.com/agelesscoding/cli.git',
  './spawn-demo-2-folder',
);
