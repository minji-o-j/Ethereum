var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}
var _abiArray=[{"constant":true,"inputs":[{"name":"input","type":"uint256"}],"name":"multiply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var _bin="608060405234801561001057600080fd5b5060c28061001f6000396000f3fe6080604052600436106039576000357c010000000000000000000000000000000000000000000000000000000090048063c6888fa114603e575b600080fd5b348015604957600080fd5b50607360048036036020811015605e57600080fd5b81019080803590602001909291905050506089565b6040518082815260200191505060405180910390f35b600060078202905091905056fea165627a7a72305820f6da909048a334c620ea5848d0281f8dde1d51ca95f2b80ad11e89b1726311470029";
var _contract = new web3.eth.Contract(_abiArray);
_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0xdbb43959dCb95Ee836d7c41fb25cd9DFA9DBa87D", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
