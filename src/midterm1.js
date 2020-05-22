miner.setEtherbase(eth.accounts[0]);
console.log('1-1: ');
console.log(JSON.stringify(admin.nodeInfo));
console.log('\n\n1-2: ');
console.log('accounts: ',eth.accounts);
console.log('balance1(ether):',web3.fromWei(eth.getBalance(eth.accounts[0]),"ether"));
console.log('balance2(ether):',web3.fromWei(eth.getBalance(eth.accounts[1]),"ether"));
console.log('blockNumber:',eth.blockNumber);
