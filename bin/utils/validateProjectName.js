const validate = require('validate-npm-package-name')
const chalk = require('chalk')

async function validateProjectName(name) {
    const results = validate(name)
    if (results.validForNewPackages) {
        const warning = (results.warnings || []).reduce((pre, next) => {
            if (pre) {
                return `${pre}\n${next}`
            } else {
                return `${pre}${next}`
            }
        }, '')
        if (warning) {
            console.log(chalk.yellowBright(`warning: ${warning}`))
        }
        return true
    } else {
        const error = (results.errors || []).reduce((pre, next) => {
            if (pre) {
                return `${pre}\n${next}`
            } else {
                return `${pre}${next}`
            }
        }, '')
        if (error) {
            console.log(chalk.red(`error: ${error}`))
        }
        return false
    }
}

module.exports = validateProjectName