const Account = require('../models/Account');
const fs = require('fs');

class SQLAccountRepository {
    constructor(){
        console.log(`SQLAccountRepository instance created..`);
    }

    loadAccount(num){
        console.log(`Loading account ${num}`);
        return new Account(num, 1000.00);
    }

    updateAccount(account){
        console.log(`Updating Account ${account.num}`)
    }
}

module.exports = SQLAccountRepository