var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));  //geth
}
var _abiArray=[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getBalanceOfThis","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getBalanceOfOwner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var _bin="608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503073ffffffffffffffffffffffffffffffffffffffff163160018190555061032e8061007e6000396000f3fe608060405260043610610072576000357c01000000000000000000000000000000000000000000000000000000009004806312065fe0146100775780632ccb1b30146100a25780632e1a7d4d146100f0578063934d85b41461011e578063b6b55f2514610149578063d8c2454114610177575b600080fd5b34801561008357600080fd5b5061008c6101a2565b6040518082815260200191505060405180910390f35b6100ee600480360360408110156100b857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101ac565b005b61011c6004803603602081101561010657600080fd5b8101908080359060200190929190505050610207565b005b34801561012a57600080fd5b50610133610282565b6040518082815260200191505060405180910390f35b6101756004803603602081101561015f57600080fd5b81019080803590602001909291905050506102a1565b005b34801561018357600080fd5b5061018c6102c2565b6040518082815260200191505060405180910390f35b6000600154905090565b806001600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610202573d6000803e3d6000fd5b505050565b806001600082825403925050819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561027e573d6000803e3d6000fd5b5050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b80341415156102af57600080fd5b8060016000828254019250508190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163190509056fea165627a7a72305820f0738e9e6e4ff741690a93c2263994924d0e6a8c5fac69fef9bfc6a3dd6719220029";
var _contract = new web3.eth.Contract(_abiArray);
_contract
    .deploy({data:"0x"+_bin})
    .send({from:"0x857f5058a125A8c34257ce56F03017b40947Ae93",
        gas: 364124,
    gasPrice: '100000'
}, function(error, transactionHash){ console.log(transactionHash); })
.on('error', function(error){ console.log(error);})
.on('transactionHash', function(transactionHash){ console.log(transactionHash); })
.on('receipt', function(receipt){
   console.log(receipt.contractAddress) // contains the new contract address
})
.on('confirmation', function(confirmationNumber, receipt){ console.log(confirmation); })
.then(function(newContractInstance){
    console.log(newContractInstance.options.address) // instance with the new contract address
});
