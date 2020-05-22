var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var abi =[{"constant":true,"inputs":[{"name":"input","type":"uint256"}],"name":"multiply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var addr = "0x0E738C028c2953c98953F5f2523F798Cf61147Bd";
var mul = new web3.eth.Contract(abi,addr);
mul.methods.multiply(8).call().then(function(str) {console.log(str);});
