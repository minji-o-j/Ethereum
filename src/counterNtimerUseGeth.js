loadScript('src/counterNtimerGeth.js')
contractName=Object.keys(_compiled.contracts)
_abi=JSON.parse(_compiled.contracts[contractName[0]].abi)
var _contract=eth.contract(_abi);
var _address="0x953431339fd6c5c07336595daf6c1f9e9c836fdf";
var _instance=eth.contract(_abi).at(_address);
_instance.start.sendTransaction({from:eth.accounts[0]});
_instance.add.sendTransaction({from:eth.accounts[0]});
_instance.add.sendTransaction({from:eth.accounts[0]});
_instance.add.sendTransaction({from:eth.accounts[0]});
miner.start(1);admin.sleepBlocks(1);miner.stop();
miner.start(1);admin.sleepBlocks(1);miner.stop();
miner.start(1);admin.sleepBlocks(1);miner.stop(); //시간이 너무 안나와서 추가함
console.log('counter: ', _instance.getCounter.call());
console.log('timePassed:', _instance.timePassed.call());
miner.start(1);admin.sleepBlocks(1);miner.stop();
