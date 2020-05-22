var Web3 = require('web3');
var web3 = new Web3('http://localhost:8345');
web3.eth.getBalance('0x76200c88d094dccee8e7a3db3a000c24b2aa263b').then(console.log);
web3.eth.getBalance('0x8e71085ffefccb88a4b54d4c93a866db7928a486').then(console.log);
