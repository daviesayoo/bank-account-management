class BankAccount {
    // Initialize the attributes of the account
    constructor(name,balance) {
        this.balance = balance; // The amount of money in the account
        this.name = name; // The name of the account holder
    }

    // Define a method for depositing money into the account
    deposit(amount) {
        try {
            if (amount < 0) {
                throw new Error('Input cannot be negative');
            } else if (amount === '') {
                throw new Error('Input cannot be empty');
            } else if(isNaN(amount)) {
                throw new Error('Input must be a number');
            } else {
                this.balance += amount; // Increase the balance by the amount
                //console.log(`${amount}$ has been deposited to ${this.name}'s account. \n Balance: ${this.balance}`);
                alert(`${amount}$ has been deposited to ${this.name}'s account. \n Balance: ${this.balance}`);    
            }
        } catch (error) {
            alert(error)
        } finally { 
        }
    }

    // Define a method for withdrawing money from the account
    withdraw(amount) {
        try {
            if (amount < 0) {
                throw new Error('Input cannot be negative');
            } else if (amount === '') {
                throw new Error('Input cannot be empty');
            } else if(isNaN(amount)) {
                throw new Error('Input must be a number');
            } else {
                if (this.balance >= amount) { // Check if there is enough money in the account
                    this.balance -= amount; // Decrease the balance by the amount
                    //console.log(`${amount}$ has been withdrawn from ${this.name}'s account. \n Balance: ${this.balance}`);
                    alert(`${amount}$ has been withdrawn from ${this.name}'s account. \n Balance: ${this.balance}`);
                } else { // If not, print an error message
                    alert(`Insufficient funds in ${this.name}'s account.`);
                } 
            }
        } catch (error) {
            alert(error)
        } finally {
            
        }
    }

    // Define a method for displaying the account details
    show() {
        console.log(`${this.name}'s account has a balance of ${this.balance}$.`);
        alert(`${this.name}'s account has a balance of ${this.balance}$.`);
    }
}

var user1_Info = new BankAccount("user1", 0);
var user2_Info = new BankAccount("user2", 0);
var user3_Info = new BankAccount("user3", 0);
var user4_Info = new BankAccount("user4", 0);

document.getElementById('calculate').addEventListener('click', function () {

    var username = document.getElementById('username').value;
    switch (username) {
        case "user1":
            console.log(user1_Info);
            paymentProcess(user1_Info);
            break;
        case "user2":
            console.log(user2_Info);
            paymentProcess(user2_Info);
            break;
        case "user3":
            console.log(user3_Info);
            paymentProcess(user3_Info);
            break;
        case "user4":
            console.log(user4_Info);
            paymentProcess(user4_Info);
            break;
        default:

            break;
    }
})

function paymentProcess(user){
    var value = document.getElementById('balance-input').value;
    console.log(value);
    var operator = document.getElementById('operator').value;

    switch (operator) {
        case "deposit":

            user.deposit(Number(value));
            break;
        case "withdraw":
            user.withdraw(Number(value));
            break;
        case "balance":
            user.show();
            break;
        default:
            document.getElementById('output').innerHTML = 'Invalid operator';
            break;

    }
}

