const fs = require('fs')
const projectPath = require('../config/projectPath')

function deleteProjectExisted(path) {
    const files = fs.readdirSync(path)
    for (let i = 0; i < files.length; i++) {
        let curPath = `${path}/${files[i]}`
        if (fs.statSync(curPath).isDirectory()) {
            //递归删除文件夹
            deleteProjectExisted(curPath)
        } else {
            //删除文件
            fs.unlinkSync(curPath)
        }
    }
    fs.rmdirSync(path)
}

deleteProjectExisted(projectPath)
deleteProjectExisted()
