import inquirer from "inquirer";


const ans = await inquirer.prompt([
    {
        type: "list",
        name: "accountType",
        choices: ["Current account", "Saving account", "Senior citizen account", "Joined account"],
        message: "Enter your account type ",
    },

    {
        type: "input",
        name: "name",
        message: "Enter your id ",
    },
    {
        type: "number",
        name: "pin",
        message: "Enter your pin ",
        mask:"*",
    },
   
    
    {
        type: "list",
        name: "choice",
        choices: ["Deposit cash", "Withdrawal cash", "Bill paid", "Check balance","Exit"],
        message: "What do you want to do? ",
        when(ans) {
            return ans.pin;
        },
    },
    {
        type: "list",
        name: "withdrawalAmount",
        choices: ["1000", "2000", "5000", "10000"],
        message: "Select how much amount you want to withdraw",
        when(ans) {
            return ans.choice === "Withdrawal cash";
        },
    },
    {
        type: "number",
        name: "depositAmount",
        message: "Enter how much amount you want to deposit? ",
        when(ans) {
            return ans.choice === "Deposit cash";
        },
    },
    {
        type: "number",
        name: "billCode",
        message: "Enter the code number of your bill? ",
        when(ans) {
            return ans.choice === "Bill paid";
        },
    },
]);

if (ans.name && ans.pin) {
    let currentBalance = Math.floor(Math.random() * 1000000);
    

    if (ans.choice === "Deposit cash") {
        console.log("your previous balance is",currentBalance)
        let newBalance = currentBalance + ans.depositAmount;
        console.log("Your current balance is", newBalance);
    } else if (ans.choice === "Withdrawal cash") {
        console.log("your previous balance is",currentBalance)
        let newBalance = currentBalance - ans.withdrawalAmount;
        console.log("Your current balance is", newBalance);
    } else if (ans.choice === "Bill paid") {
        let billAmount = Math.floor(Math.random() * 100);
        let newBalance = currentBalance - billAmount;
        console.log("Your current balance is", newBalance);
        console.log("Your bill is paid ✅");
    } else if (ans.choice === "Check balance") {
        console.log("Your current balance is", currentBalance);
    }
    else if(ans.choice==="EXIT "){
        console.log("")
    }
} else {
    console.log("You have insufficient balance");
}
console.log("thank you for using our service!!!")
