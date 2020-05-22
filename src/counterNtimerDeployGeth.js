var primary=eth.accounts[0];        //var Web3=require('web3');//var web3;
loadScript('src/counterNtimerGeth.js')
contractName=Object.keys(_compiled.contracts)
_abi=JSON.parse(_compiled.contracts[contractName[0]].abi)   //abi
_code=_compiled.contracts[contractName[0]].bin              //bin
_class=eth.contract(_abi);
console.log('bin code: ', _code)
_object=_class.new({from:primary,data:'0x'+_code,gas:1000000}, function(err, contract) {
  if (!err && contract.address)
    console.log("contractAddress: ", contract.address);
    console.log("transactionHash: ", contract.transactionHash);
});
