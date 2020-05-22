var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var shelloContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}],
                                      "0x24A8Ec59E2FbAF4E161669469B527bBAab54ece7");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
