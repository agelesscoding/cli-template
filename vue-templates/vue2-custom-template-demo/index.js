const ejs = require("ejs");
const path = require("path");
const fse = require("fs-extra");
const { globSync } = require("glob");

// 模板渲染
async function ejsRender(opts) {
  const dir = opts.targetPath;
  const projectInfo = opts.data;
  const files = globSync("**", {
    cwd: dir,
    ignore: opts.ignore || "",
    nodir: true,
  });

  Promise.all(
    files.map((file) => {
      const filePath = path.join(dir, file);
      return new Promise((resolve1, reject1) => {
        ejs.renderFile(filePath, projectInfo, (err, result) => {
          if (err) {
            reject1(err);
          } else {
            fse.writeFileSync(filePath, result);
            resolve1(result);
          }
        });
      });
    })
  )
    .then()
    .catch((err) => {
      throw err;
    });
}

async function install(opts) {
  const descriptionPrompt = {
    type: "input",
    name: "pkgDescription",
    message: `请输项目入描述信息`,
    default: "component description",
    validate: function (v) {
      // Declare function as asynchronous, and save the done callback
      const done = this.async();

      // Do async stuff
      setTimeout(function () {
        if (!v) {
          // Pass the return value in the done callback
          done(`请输项目入描述信息`);
          return;
        }
        // Pass the return value in the done callback
        done(null, true);
      }, 0);
    },
  };
  const inquirer = (await import("inquirer")).default;
  const project = await inquirer.prompt([
    // projectNamePrompt,
    // projectVersionPrompt,
    descriptionPrompt,
    // projectTemplatePrompt,
  ]);

  opts.projectInfo.pkgDescription = project.pkgDescription;

  // 1. 拷贝模板代码至当前目录
  try {
    const { sourcePath, targetPath } = opts;

    fse.ensureDirSync(sourcePath); // 确保模板目录存在（注意：这里的模板目录是一个软连接目录）
    fse.ensureDirSync(targetPath); // 确保目标目录存在
    // 将模板目录下的文件拷贝到当前目录
    fse.copySync(sourcePath, targetPath, {
      // 复制过程中，软链接会被解引用，也就是说，复制的是软链接指向的实际文件或目录，而不是软链接本身
      dereference: true, // 拷贝软链接
    });
    // 删除目标目录下的 node_modules
    if (fse.pathExistsSync(path.resolve(targetPath, "node_modules"))) {
      fse.removeSync(path.resolve(targetPath, "node_modules"));
    }

    const templateIgnore = opts.templateInfo.ignore || [];
    const ignore = ["**/node_modules/**", ...templateIgnore];
    await ejsRender({ ignore, targetPath, data: opts.projectInfo }); // 模板渲染
  } catch (error) {
    throw error;
  }
}

module.exports = install;
