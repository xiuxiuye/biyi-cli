const inquirer = require('inquirer')

function createInquirer(options) {
    return new Promise((resolve, reject) => {
        inquirer
            .prompt(options)
            .then(answers => {
                // Use user feedback for... whatever!!
                resolve(answers)
            })
    })
}

module.exports = createInquirer
