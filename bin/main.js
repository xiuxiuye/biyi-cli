#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const validateProjectName = require('./utils/validateProjectName')
const validVersion = require('./utils/validVersion')
const create = require('./create')

console.log(chalk.greenBright('欢迎使用biyi-cli。'))

program
    .command('create <name> <version>')
    .action(function (name, version) {
        // 检查项目名规范
        if (validateProjectName(name)) {
            // 检查版本号
            if (validVersion(version)) {
                // 启动
                create(name, version)
            }
        }
    })

program.parse(process.argv)
