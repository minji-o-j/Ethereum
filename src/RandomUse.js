var Web3=require('web3');
var fs=require('fs');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}
var _abiArray =[{"constant":true,"inputs":[],"name":"genRandomInteger","outputs":[{"name":"","type":"uint8[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rand0and250","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rand","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rand0and9","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rand0and2","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}];
async function doIt() {
    var rand= new web3.eth.Contract(_abiArray, '0x3e6e1feD23e4c0b7c1F943b11FA60611A719699f');
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    
    //계정 A,B 설정
    await rand.methods.rand0and2().send({from: accounts[0], gas: 122209});
    //초기 금액 출력
    rand.methods.rand0and2().call().then(function(value) {console.log(value)});
}

doIt();
