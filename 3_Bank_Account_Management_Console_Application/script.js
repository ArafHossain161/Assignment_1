class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount){
        if(amount > this.balance ) {
            console.log("Insufficient Amount");
        } else {
            this.balance -= amount;
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log("Account Number: ", this.accountNumber);
        console.log("Owner Name: ", this.ownerName);
        console.log(`Balance: $${this.balance}`);
    }
}

const accountOfAraf = new BankAccount("1010", "Araf", 500);
console.log("Account Creation", accountOfAraf);

accountOfAraf.deposit(145);
console.log("Deposit", accountOfAraf);

accountOfAraf.withdraw(700);
accountOfAraf.withdraw(100);

console.log("Current Balance", accountOfAraf.getBalance());

accountOfAraf.displayAccountInfo();

// Second Account

const accountOfAwal = new BankAccount("1010", "Awal", 6070);
console.log("Account Creation", accountOfAwal);

accountOfAwal.deposit(145);
console.log("Deposit", accountOfAwal);

accountOfAwal.withdraw(700);
accountOfAwal.withdraw(7100);

console.log("Current Balance", accountOfAwal.getBalance());

accountOfAwal.displayAccountInfo();

