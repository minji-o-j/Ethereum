var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var _abiArray = [{"constant":false,"inputs":[{"name":"param4","type":"uint256"}],"name":"multiply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"param1","type":"uint256"},{"indexed":false,"name":"param2","type":"address"},{"indexed":false,"name":"param3","type":"uint256"}],"name":"Print","type":"event"}];
var _bin = "0x" + "608060405234801561001057600080fd5b5061011a806100206000396000f3fe6080604052600436106039576000357c010000000000000000000000000000000000000000000000000000000090048063c6888fa114603e575b600080fd5b348015604957600080fd5b50607360048036036020811015605e57600080fd5b81019080803590602001909291905050506075565b005b7f0c0d02d413a05ea6533549805e3e8abb95f5f265c82172b20a679738e3a70401423360078402604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15056fea165627a7a72305820c5a14d804ddb0e15f4fcedb6949f80c42ef9ad5b1426ca8e241b5932cc5a66990029";
async function deploy() {
    const accounts = await web3.eth.getAccounts();//값 반환 기다림
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 1000000}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()
