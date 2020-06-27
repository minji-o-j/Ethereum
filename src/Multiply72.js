var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var abi =[{"constant":true,"inputs":[{"name":"input","type":"uint256"}],"name":"multiply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var addr = "0xd60Af354520E92D67f9980d5dcc4E99d3F232A0F";
var mul = new web3.eth.Contract(abi,addr);
mul.methods.multiply(8).call().then(function(str) {console.log(str);});
