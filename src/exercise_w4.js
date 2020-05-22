miner.setEtherbase(eth.accounts[0]);
console.log('coinbase: ',eth.coinbase);
var ac=eth.getBalance(eth.accounts[0]);
console.log('balance: ',ac,'   balance(ether):',web3.fromWei(ac,"ether"));
miner.start(1);admin.sleepBlocks(1);miner.stop();
console.log('balance: ',ac,'   balance(ether):',web3.fromWei(ac,"ether"));