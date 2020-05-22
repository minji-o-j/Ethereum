var Web3 = require('web3');
var web3 = new Web3('http://localhost:8345');
web3.eth.getCoinbase().then(console.log);
