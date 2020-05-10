#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const validateProjectName = require('./utils/validateProjectName')
const create = require('./create')
const fs = require('fs')
const path = require('path')
// 临时 处理svg的文件
var files = fs.readdirSync('E:\\Git\\biyi-cli\\bin\\svg')
const icons = []
for(var i=0;i<files.length;i++){
    icons.push(files[i].slice(0, files[i].indexOf('.svg')))
}

fs.writeFile(path.resolve(__dirname, '../icons.js'), `export default ${JSON.stringify(icons)}`, function (err) {
    if (err) {
        console.log(chalk.red(`error: ${err}`))
    }
})

console.log(chalk.greenBright('欢迎使用biyi-cli。'))

program
    .command('create <name> <version>')
    .action(function (name, version) {
        // 检查项目名规范
        if (validateProjectName(name)) {
             // 启动
            //  create(name, version)
        }
    })

program.parse(process.argv)
