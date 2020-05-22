var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}
//solc 0.5.0
//var _abiArray=[{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"subtract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
//var _bin="60806040526000805534801561001457600080fd5b5060e6806100236000396000f3fe6080604052348015600f57600080fd5b50600436106059576000357c0100000000000000000000000000000000000000000000000000000000900480634f2be91f14605e5780636deebae31460665780638ada066e14606e575b600080fd5b6064608a565b005b606c609d565b005b607460b1565b6040518082815260200191505060405180910390f35b6000808154809291906001019190505550565b600080815480929190600190039190505550565b6000805490509056fea165627a7a723058201fbaa288a76e68fea3b0373a390c6e375e9bb90c0fd24b0660d64ebb408088d60029";
//solc 0.6.1
var _abiArray=[{"inputs":[],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subtract","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _bin="60806040526000805534801561001457600080fd5b50610104806100246000396000f3006080604052600436106053576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634f2be91f1460585780636deebae314606c5780638ada066e146080575b600080fd5b348015606357600080fd5b50606a60a8565b005b348015607757600080fd5b50607e60bb565b005b348015608b57600080fd5b50609260cf565b6040518082815260200191505060405180910390f35b6000808154809291906001019190505550565b600080815480929190600190039190505550565b600080549050905600a165627a7a72305820ac547a1f9b990d60e8315bf5398e714b0054c60b16694ac7347c07364964ae9e0029";
var _contract = new web3.eth.Contract(_abiArray);
//unlock the account with a password provided
//web3.personal.unlockAccount(web3.eth.accounts[0],'password');
_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0xc620CC0746fe29da5798D902c0FD0c1331b32282", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
