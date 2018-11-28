
//ES5 syntax
function Utility(params) {
    
}

//static api simulation
Utility.add = function(a, b){
    return a+b;
}

console.log(Utility.add(1,2));


//ES6 syntax
class MathUtility {
    static add(a, b){
        return a+ b;
    }
}

console.log(MathUtility.add(10, 20));

class Account{
    constructor(balance){
        this.balance= balance;
        console.log('Account Constructor');
    }

    print(){
        console.log('I am from Account class--print function');
    }

    modifyBalance(num){
        this.balance +=num;
    }
}

class SavingAccounts extends Account{
    constructor(accno = 1, name = 'name', balance){
        super(balance);
        this.accno = accno;
        this.name = name;
        console.log('SavingAccount Constructor');
    }

    print(){
        super.print();
        console.log('I am from saving Account class-- print function');
    }
}

let emp = new SavingAccounts();

console.log(emp instanceof SavingAccounts);
console.log(emp instanceof Account);
console.log(emp instanceof Object);
