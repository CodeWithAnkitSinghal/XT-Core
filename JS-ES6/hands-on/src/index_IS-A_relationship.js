//IS-A relationship
function Account(){
    this.id = 1;
    this.name = 'Ankit';
    this.calculateIntereset = function(){
        return 20;
    }
}

const acc = new Account();
acc.id = 1
console.log(acc)

const acc1 = new Account();
acc.id = 2
console.log(acc1);

//setting the shared data
Account.prototype.balance = 100;
//changed the shared data
acc1.__proto__.balance = 101;
acc1.__proto__.balance1 = 102;
acc1.balance = 100;

console.log(acc1.balance);
console.log(acc.balance);




console.log(acc.calculateIntereset());
console.log(acc1.calculateIntereset());



Account.prototype.calculateInterest = function(p = 1, r= 10.5, t= 12){
    return (p*r*t)/100;
};


//now we will replicate method overriding behaviour in acc instance

acc.calculateIntereset = function(p = 1, r = 20, t=12) {
    return (p*r*t)/100;
}

console.log(acc.calculateIntereset());

//hasOwnProperty
console.log(acc.hasOwnProperty('balance'));
console.log(acc.hasOwnProperty('balance'));
console.log(acc1.hasOwnProperty('balance1'));
console.log(acc1.hasOwnProperty('balance1'));
console.log(acc.__proto__.hasOwnProperty('balance'));
console.log(acc1.__proto__.hasOwnProperty('balance'));
