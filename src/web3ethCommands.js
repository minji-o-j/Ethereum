var Web3 = require('web3');
var web3 = new Web3('http://117.16.44.45:8345');
web3.eth.getCoinbase().then(console.log);
//web3.eth.getChainId().then(console.log);
web3.eth.getAccounts(console.log);
web3.eth.getCoinbase().then(console.log);
web3.eth.getBlockNumber().then(console.log);
web3.eth.getBalance('0x7f09cf8f345fb8ad0e38344dac12b495bb854e8').then(console.log);
web3.eth.getNodeInfo().then(console.log);
