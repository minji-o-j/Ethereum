var init_sender=eth.getBalance(eth.coinbase)
var init_receiver=eth.getBalance(eth.accounts[1])
console.log('init balance of sender');
console.log('wei:',init_sender,' ether:',web3.fromWei(init_sender,"ether"));
console.log('init balance of receiver');
console.log('wei:',init_receiver,' ether:',web3.fromWei(init_receiver,"ether"));

console.log('\n\n1-3: ');
var t=eth.sendTransaction({from:eth.coinbase, to:eth.accounts[1], value:web3.toWei(1.11,"ether")});
console.log('...mining start');
miner.start(1);admin.sleepBlocks(1);miner.stop();
console.log('mining done...\n');


console.log('\n\n1-4: ');
console.log('transactionHash: ',t);
console.log('getTransactionReceipt: ',JSON.stringify(eth.getTransactionReceipt(t)));


console.log('\n\n1-5: ');
console.log('balance of sender');
console.log('wei: ',eth.getBalance(eth.coinbase),'ether:',web3.fromWei(eth.getBalance(eth.coinbase),"ether"));
console.log('balance of receiver:');
console.log('wei:',eth.getBalance(eth.accounts[1]),'ether:',web3.fromWei(eth.getBalance(eth.accounts[1]),"ether"));
console.log('\nincreased balance(receiver)');
console.log('wei:',eth.getBalance(eth.accounts[1])-init_receiver,'eiter:',web3.fromWei(eth.getBalance(eth.accounts[1])-init_receiver,"ether"));
console.log('blockNumber:',eth.blockNumber);
