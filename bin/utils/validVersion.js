const chalk = require('chalk')

function validVersion(version) {
    const reg = /^\d+.\d+.\d+$/
    if (!reg.test(version)) {
        console.log(chalk.red('error: 版本号格式不正确（例：1.0.0）。'))
        return false
    } else {
        return true
    }
}

module.exports = validVersion