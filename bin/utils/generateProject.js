const download = require('download-git-repo')
const ora = require('ora')
const installDeps = require('./installDeps')
const createInquirer = require('./createInquirer')
const fs = require('fs')
const path = require('path')
const config = require('../config/config')

const options = [
    {
        type: 'confirm',
        name: 'autoInstall',
        message: '项目创建成功，是否立即安装相关依赖包？',
        default: 'false'
    }
]

function generateProject(targetPath, version) {
    const spinner = ora('正在创建项目...')
    spinner.start()
    download(`${config.repository}#${version}`, targetPath, { clone: false }, err => {
        spinner.stop()
        if (err) {
            console.log(err)
        } else {
            saveProjectName(targetPath)
            createInquirer(options).then(res => {
                if (res.autoInstall) {
                    // 安装依赖包
                    installDeps(targetPath)
                }
            })
        }
    })
}

// 保存项目路径
function saveProjectName(targetPath) {
    targetPath = targetPath.split('\\').join('\\\\')
    fs.writeFile(path.resolve(__dirname, '../config/projectPath.js'), `module.exports = '${targetPath}'`, function (err) {
        if (err) {
            console.log(chalk.red(`error: ${err}`))
        }
    })
}

module.exports = generateProject
