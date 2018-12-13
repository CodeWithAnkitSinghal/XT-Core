const SQLAccountRepository = require('../repository/NoSQLAccountRepository');

class NEFTTransferService{
    constructor(){
        console.log(`NEFTTransferService instance creataed...`);
    }

    transfer(amount, fromAccNum, toAccNum){
        console.log(`TRX Begin...`);
        const sqlRepository = new SQLAccountRepository();

        //load Account
        const fromAcc = sqlRepository.loadAccount(fromAccNum);
        const toAcc = sqlRepository.loadAccount(toAccNum);
        
        fromAcc.balance -= amount;
        toAcc.balance += amount;

        //Update Account
        sqlRepository.updateAccount(fromAcc);
        sqlRepository.updateAccount(toAcc);
        console.log(`TRX success...`);
    }
}

module.exports = NEFTTransferService;