var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}
var _abiArray=[{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"subtract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timePassed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var _bin="6080604052600060015534801561001557600080fd5b506101be806100256000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634f2be91f1461007d5780636deebae3146100945780638ada066e146100ab578063b4454253146100d6578063bbe4fd5014610101578063be9a65551461012c575b600080fd5b34801561008957600080fd5b50610092610143565b005b3480156100a057600080fd5b506100a9610157565b005b3480156100b757600080fd5b506100c061016c565b6040518082815260200191505060405180910390f35b3480156100e257600080fd5b506100eb610176565b6040518082815260200191505060405180910390f35b34801561010d57600080fd5b50610116610181565b6040518082815260200191505060405180910390f35b34801561013857600080fd5b50610141610189565b005b600160008154809291906001019190505550565b60016000815480929190600190039190505550565b6000600154905090565b600080544203905090565b600042905090565b426000819055505600a165627a7a72305820569c38c4fc850bdb06ad7767d73a35c3f18706682383c5eb1544086d15ed31360029";
var _contract = new web3.eth.Contract(_abiArray);
_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0x8e71085ffefccb88a4b54d4c93a866db7928a486", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
