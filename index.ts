#! /usr/bin/env node

import inquirer from "inquirer";

const currency : any = {
    USD : 1, // Base currency
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,
};


let user_answer = await inquirer.prompt([
    {
        type : "list",
        name : "from",
        message : "Enter From Currency",
        choices : ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        type : "list",
        name : "to",
        message : "Enter To Currency",
        choices : ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        type : "number",
        name : "amount",
        message : "Enter Your Amount",
    },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD Base Currency
let convertedAmount = Math.floor(baseAmount * toAmount);


console.log(convertedAmount);

