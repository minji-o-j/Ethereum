var Web3 = require('web3');
var web3 = new Web3('http://localhost:8345');

web3.eth.getBalance('0x76200c88d094dccee8e7a3db3a000c24b2aa263b').then(web3.utils.fromWei).then(console.log);
