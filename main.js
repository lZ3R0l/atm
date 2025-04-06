const account = {
    accountName: 'John Doe',
    balance: 1000,
}

function atm() {
    let choice

    

    do {
        choice = parseFloat(
            prompt(`
                Welcome to the ATM! Enter your choice:\n
                1) Deposit \n
                2) Withdraw \n
                3) Check Balance \n
                4) Get Account Name \n
                5) Exit
            `)
        );

        switch (choice) {
            case 1:
                deposit();
                break;
            case 2:
                withdraw();
                break;
            case 3:
                getBalance();
                break;
            case 4:
                getAccountName();
                break;
            case 5:
                alert("Thank you for using our ATM. Goodbye!");
                break;
            default:
                accountError("Invalid choice. Please try again.");
        }
    } while (choice !== 5);
}

function deposit() {
    let depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
    if (isNaN(depositAmount) || depositAmount <= 0) {
        accountError("Invalid amount. Please enter a positive number.");
    } else {
        account.balance += depositAmount;
        alert(`$${depositAmount} has been deposited to your account.`);
    }
}

function withdraw() {
    let withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        accountError("Invalid amount. Please enter a positive number.");
    } else if (withdrawAmount > account.balance) {
        accountError("Insufficient funds. Please enter a smaller amount.");
    } else {
        account.balance -= withdrawAmount;
        alert(`$${withdrawAmount} has been withdrawn from your account.`);
    }
}

function getBalance() {
    alert(`Your account balance is $${account.balance}`);

}

function getAccountName() {
    alert(`The account belongs to ${account.accountName}`);
}

function accountError(message) {
    console.error(`Account Error: ${message}`);
    alert(`Error: ${message}`);
}

atm();