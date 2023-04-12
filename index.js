const inquirer = require('inquirer')
const fs = require('fs')
const generatePortfolio = require('./generatePortfolio')


const questions = 
inquirer.prompt([

{
    type: 'input',
    message: 'Create your portfolio! What is your name?',
    name: "name"

},

{
    type: 'input',
    message: 'Where are you located?',
    name:'location'
},

{
    type: 'input',
    message: "Please write a short bio",
    name: 'bio'
},
{
    type: 'input',
    message: 'What is your LinkedIn URL?',
    name: 'LinkedIn'
},

{
    type: 'input',
    message: 'What is your GitHub URL?',
    name: 'GitHub'
}
]).then((response) =>
writeToFile('portfolio.html', response)
)


function writeToFile(fileName, data) {
    const portfolio = generatePortfolio(data)
    fs.writeFile(fileName, portfolio, err =>
        err ? console.error(err) : console.log("Congrats! Your portfolio has been created!")
    )

}