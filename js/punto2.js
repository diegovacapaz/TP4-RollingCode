class Account{
    constructor(username){
        this.username = username;
        this.balance = 0;
    }
    deposit(amount){
        if(amount < 0){
            console.log("Invalid amount.");
        }
        else{
            this.balance += amount;
            console.log("Your balance has been updated.");
        }
    }
    extract(amount){
        if(amount < 0){
            console.log("Invalid amount.");
        }
        else{
            this.balance -= amount;
            console.log("Your balance has been updated.");
        }
    }
    report(){
        console.log(`Mr.${this.username}, your account have $${this.balance}`);
    }
}
let alexAccount = new Account("Alex");
alexAccount.report();
alexAccount.deposit(400);
alexAccount.report();
alexAccount.extract(250);
alexAccount.report();
