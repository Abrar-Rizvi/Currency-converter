#! /usr/bin/env node

//imported inquirer from node_module folder.
import inquirer from "inquirer";

//declaring a variable to store currencies and making usd as base currency
const currency:any = {
    USD: 1, // base currency
    GBP: 0.79,
    INR: 83.30,
    PKR: 277.54,
    UAE: 3.67,
    SR:  3.75,
    CAD: 1.36,

}

//getting input from user 
const ans:any = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Convert currency from",
            type: "list",
            choices: ["USD", "INR", "PKR", "UAE", "SR", "CAD", "GBP"]
        },

        {
            name: "to",
            message: "To",
            type: "list",
            choices: ["USD", "INR", "PKR", "UAE", "SR", "CAD", "GBP"]
        },

        {
            name: "amount",
            message: "Enter amount",
            type: "number",
        },

    ]
)

let fromAmount = currency[ans.from] // it gets exchange rate of currency 
let toAmount = currency[ans.to]     // it gets exchange rate of currency 
let amount = ans.amount             // it gets amount which user give in input
let baseAmount = amount / fromAmount // conversion into base amount dollar
let ConvertedAmount = toAmount * baseAmount // base amount is converted to desired amount in which we want conversion

// removing  decimal from  converted amount.
let roundOff = Math.floor(ConvertedAmount)
console.log(roundOff);










