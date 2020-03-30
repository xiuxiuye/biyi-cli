const fs = require('fs')
const path = require('path')

// 保存项目路径
function saveProjectName(targetPath) {
  targetPath = targetPath.split('\\').join('\\\\')
  fs.writeFile(path.resolve(__dirname, '../config/projectPath.js'), `module.exports = '${targetPath}'`, function (err) {
      if (err) {
          console.log(chalk.red(`error: ${err}`))
      }
  })
}

module.exports = saveProjectName
