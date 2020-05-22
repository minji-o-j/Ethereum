var primary = eth.accounts[0];
console.log("primary ac: ",primary);
console.log("balance: ",eth.getBalance(primary));
loadScript('src/TimerGeth.js')
contractName=Object.keys(_compiled.contracts)
//_abi=JSON.parse(_compiled.contracts['src/Example.sol:Example'].abi)
_abi=JSON.parse(_compiled.contracts[contractName[0]].abi)
//_code=_compiled.contracts['src/Example.sol:Example'].bin
_code=_compiled.contracts[contractName[0]].bin
_class=eth.contract(_abi);
console.log('bin code: ', _code)
//this async way does not work from the Jupyter Notebook
_object=_class.new({from:primary,data:'0x'+_code,gas:1000000}, function(err, contract) {
  if (!err && contract.address)
    console.log("contractAddress: ", contract.address);
    console.log("transactionHash: ", contract.transactionHash);
});
