import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    CHF: 1.113,
    AUD: 1.48,
    MXN: 18.06,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: Object.keys(currency),
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: Object.keys(currency),
    },
    {
        name: "amount",
        message: "Enter the amount to convert",
        type: "number",
    }
]);
let from_currency = currency[user_answer.from];
let to_currency = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / from_currency;
let convertedAmount = baseAmount * to_currency;
console.log(convertedAmount);
