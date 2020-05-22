console.log('1. 블록 번호: ', eth.blockNumber);
console.log('2. enode: ',admin.nodeInfo.enode);
console.log('3. peer의 개수: ',net.peerCount);
console.log('4. 계정 목록: ',eth.accounts);
var ac0=eth.getBalance(eth.accounts[0]);
var ac1=eth.getBalance(eth.accounts[1]);
var ac2=eth.getBalance(eth.accounts[2]);
console.log('5. 각 계정의 잔액: ','계정 1: ',web3.fromWei(ac0,"ether"), ' 계정 2:', web3.fromWei(ac1,"ether"), ' 계정 3:', web3.fromWei(ac2,"ether"));
console.log('6. 변경 전 coinbase: ', eth.coinbase);
miner.setEtherbase(eth.accounts[1])
console.log('   변경 후 coinbase: ',eth.coinbase);
console.log('7. 현재 대기하는 transaction의 수:  ','pending: ',txpool.status.pending, ' queued: ',txpool.status.queued);
console.log('   없는 이유: 아직 거래를 만들지 않았기 때문에');
console.log('8. 현재 블록 번호: ',eth.blockNumber);
console.log('   처음 출력했을 때와 변동이 있는가?: 없다.');
console.log('   블록 번호가 그대로인 이유는?: blockNumber은 mining을 하면 block이 만들어지면서 blockNumber가 증가한다. 하지만 계정을 출력하거나 잔고를 출력하는 등의 작업은 mining이 아니기 때문에 block이 만들어지지 않았다. 따라서 블록의 번호는 그대로이다.'); 