const createInquirer = require('./createInquirer')
const options = [
    {
        type: 'confirm',
        name: 'coverFile',
        message: '当前路径下项目名已存在，是否需要覆盖？',
        default: 'false'
    }
]

function handleFileExisted() {
    return new Promise((resolve, reject) => {
        createInquirer(options).then(res => {
            if (res.coverFile) {
                resolve()
            }
        })
    })
}

module.exports = handleFileExisted
