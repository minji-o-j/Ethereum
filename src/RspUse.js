var Web3=require('web3');
var fs=require('fs');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}
var _abiArray =[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"setA","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMatchResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"}],"name":"setAddressAB","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"play","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"distributeBetAmount","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_batting","type":"uint256"},{"name":"_rsp","type":"uint256"}],"name":"setB","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

async function doIt() {
    var rsp= new web3.eth.Contract(_abiArray, '0xf9EEf55036206a18863527901332d00cb6025b38');
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    
    await rsp.methods.setAddressAB(accounts[1]).send({from: accounts[0], gas: 122209});
    await rsp.methods.deposit(10000).send({from: accounts[0], gas: 122209,value:10000});
    rsp.methods.getBalance().call().then(function(value) {console.log("<Init balance>\nA:", value[0], "  B:", value[1], "  Contract:",value[2],"\n")});
    
    await rsp.methods.setA().send({from: accounts[0], gas: 122209});
    await rsp.methods.setB(1000,2).send({from: accounts[0], gas: 122209});
    await rsp.methods.play().send({from: accounts[0], gas: 122209});
    rsp.methods.getMatchResult().call().then(console.log);
    await rsp.methods.distributeBetAmount().send({from: accounts[0], gas: 122209});
    rsp.methods.getBalance().call().then(function(value) {console.log("\n<game After>\nA:", value[0], "  B:", value[1], "  Contract:",value[2])});
    
}

doIt();
