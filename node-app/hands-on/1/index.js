const NEFTTransferService = require('../1/services/NEFTTransferService');


console.log(`---------------------------------------`);
const txrService = new NEFTTransferService();
console.log(`---------------------------------------`);

console.log(`---------------------------------------`);
txrService.transfer(100.00, "1", "2");
txrService.transfer(100.00, "2", "1");
console.log(`---------------------------------------`);
