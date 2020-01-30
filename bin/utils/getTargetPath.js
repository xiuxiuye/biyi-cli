const path = require('path')

function getTargetPath(projectName) {
    const cwd = process.cwd()
    // 生成项目项目目录
    const targetPath = path.resolve(cwd, projectName)
    return targetPath
}

module.exports = getTargetPath