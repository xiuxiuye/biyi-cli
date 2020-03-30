const getTargetPath = require('./utils/getTargetPath')
const isFileExist = require('./utils/isFileExist')
const handleFileExisted = require('./utils/handleFileExisted')
const generateProject = require('./utils/generateProject')
const saveProjectName = require('./utils/saveProjectPath')
const ora = require('ora')
const execa = require('execa')
const path = require('path')

function create(projectName, version) {
    // 获取新建项目的路径
    const targetPath = getTargetPath(projectName)
    // 检查新建目录是否已存在
    if (isFileExist(targetPath)) {
        saveProjectName(targetPath)
        handleFileExisted().then(async () => {
            const spinner = ora('正在删除原项目...')
            spinner.start()
            try {
                // 覆盖已存在的项目
                await execa('node', ['bin/utils/deleteProjectExisted.js'], {
                    cwd: path.resolve(__dirname, '../')
                })
                spinner.stop()
                generateProject(targetPath, version)
            } catch (error) {
                spinner.stop()
                console.log(error)
            }
        })
    } else {
        // 根据相关选择的参数生成对应的项目
        generateProject(targetPath, version)
    }
}

module.exports = create
