const execa = require('execa')
const ora = require('ora')

function installDeps(path) {
    try {
        const child = execa('npm', ['install'], {
            cwd: path,
            stdio: ['inherit', 'inherit', 'inherit']
        })
        child.stdout.on('data', buffer => {
            process.stdout.write(buffer)
        })
    } catch (error) {}
}

module.exports = installDeps