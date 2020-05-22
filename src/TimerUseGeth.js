loadScript('src/TimerGeth.js')
contractName=Object.keys(_compiled.contracts)
_abi=JSON.parse(_compiled.contracts[contractName[0]].abi)
//_abi=JSON.parse(_compiled.contracts['src/Example.sol:Example'].abi)
var _contract=eth.contract(_abi);
var _address="0x2440564d83df8bee8a2b3fb36360315de38b67c3";
var _instance=eth.contract(_abi).at(_address);
console.log(_instance.getNow.call());
_instance.start.sendTransaction({from:eth.accounts[0]});
console.log(_instance.timePassed.call());
