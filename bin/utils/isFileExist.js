const fs = require('fs')

function isFileExist (file) {
    return fs.existsSync(file)
}

module.exports = isFileExist