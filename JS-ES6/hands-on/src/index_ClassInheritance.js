'use strict'

//prototype inheritance

//ES5 syntax
function Person(){
    console.log('Person is called');
    this.name = 'Default'
}

function Employee(){
    console.log('Employee is called');
    //interface based hierarchy
    Person.call(this);
    this.salary = 10;
}

//class based hierarchy
Employee.prototype = Object.create(Person.prototype);
console.dir(Employee);

const emp1 = new Employee('Ankit1');
console.log(emp1);


const emp2 = new Employee('Ankit2');
console.log(emp2);


const emp3 = new Employee('Ankit3');
console.log(emp3);

//ES6 syntax
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

let sa = new SavingAccounts(1, 'ankit', 5000);
console.dir(sa);

SavingAccounts.prototype.test ='Adsad'


let sa1 = new SavingAccounts(1, 'ankit', 5000);
console.dir(sa1);

sa1.print();
sa.print();

const favFood = {
    name:'Ankit',
    //we have overridden the toString()
    toString(){
        return this.name;
    }
}

console.log(favFood.toString());

//can we redifine 