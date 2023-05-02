import inquirer from "inquirer"
import chalk from "chalk"

async function input() 
{
    let user = await inquirer.prompt([{
        name:"inp",
        type:"number",
        message:chalk.yellow.bold("\nenter 1 if your talk too much\nenter 2 if you talk too little "),
    }])    
    return user.inp;
}
export{input};