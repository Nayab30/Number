#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber)
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number between 1 to 6 :",
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log(chalk.green `"Congratulation! you guessed right number.`);
}
else {
    console.log(chalk.red `Sorry! you guessed  wrong number.`);
}
