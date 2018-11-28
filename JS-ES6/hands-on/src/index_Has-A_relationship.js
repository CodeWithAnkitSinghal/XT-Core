//object hierarchy
//HAS-A relationship - design pattern IOC, dependency injection
//IS-A relationship - inheritance

//objects are linked during run time not at compile time

'use strict'

//ES5 syntax
function Employee(id = 1, name = 'default', address = new Address()){
    this.id = id;
    this.name = name;
    this.address = address;
}

function Address(doorNo = 1, street = 3, city = 'defaultCity', zipcode = '321001', state = 'defaultState'){
    this.doorNo = doorNo;
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    this.state = state;
}

function Animal(name){
    this.name = name;
}
//this is not recommended practise in javascript
let empa = new Employee();
empa.address = new Address();

let a = new Animal('SSSS')
let emp = new Employee(1, 'Ankit', a);
console.log(JSON.stringify(emp));

//ES6 syntax
class Customer{
    constructor(id=1, name='name', order = new Order()){
        this.id = id;
        this.name = name;
        this.order = order;
    }
}

class Order{
    constructor(orderId = 'AAOO', value = 0){
        this.orderId = orderId;
        this.value = value;
    }
}

class CustomerComponent{
    constructor(){
        console.log('UI Component created');
    }

    render(){
        let order = new Order('OrderNumber1', 20);
        let customer = new Customer(2, 'Ankit', order);
        console.log(JSON.stringify(customer));
    }
}

var c = new CustomerComponent().render();

