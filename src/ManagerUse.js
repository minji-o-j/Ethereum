var Web3=require('web3');
var fs=require('fs');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}
var _abiArray =[{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"updateStatus","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"ordernum","type":"uint256"},{"name":"product","type":"string"},{"name":"count","type":"uint256"},{"name":"_cost","type":"uint256"}],"name":"Order","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getsOrderWithAddr","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"odnum","type":"uint256"}],"name":"getOrderWithNum","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

async function doIt() {
    var manage= new web3.eth.Contract(_abiArray, '0xAe2f94d9E2D48401B13D72381097Bcbc4a50a4c2');
    const accounts = await web3.eth.getAccounts();
    //console.log("Account: " + accounts[0]);
    
    //주문 1,2,3
    
    manage.methods.Order(accounts[2],306,"burger",12,10000).estimateGas(function(err, gas) {
        if(!err) console.log(">> gas: "+ gas);
    });
    await manage.methods.Order(accounts[1],305,"water",12,12000).send({from: accounts[0], gas: 187502});
    await manage.methods.Order(accounts[2],306,"burger",12,10000).send({from: accounts[0], gas: 188642});
    await manage.methods.Order(accounts[3],307,"paper",9,28000).send({from: accounts[0], gas: 188630});
    
    // 금액 출력
    manage.methods.ownerBalance().call().then(function(value) {console.log("sum of order",value)});
    
    //2번 계정의 주문 내역 출력
    manage.methods.getsOrderWithAddr(accounts[1]).call().then(function(value) {console.log("second account's...\n orderNumber:",value[0],"\n product:",value[1],"\n value:",value[2],"\n status:",value[3],"\n\n")});
    
    //주문 번호로 주문 내역 출력
    //console.log("------")
    manage.methods.getOrderWithNum(305).call().then(function(value) {console.log("account's...\n orderNumber:",value[0],"\n product:",value[1],"\n value:",value[2],"\n status:",value[3])});
    manage.methods.getOrderWithNum(306).call().then(function(value) {console.log("account's...\n orderNumber:",value[0],"\n product:",value[1],"\n value:",value[2],"\n status:",value[3])});
    manage.methods.getOrderWithNum(307).call().then(function(value) {console.log("account's...\n orderNumber:",value[0],"\n product:",value[1],"\n value:",value[2],"\n status:",value[3])});
    
    
    //컨트랙의 잔고 조회
    manage.methods.getBalance().call().then(function(value) {console.log("balance of contract:",value)});
    
    //주문 배송 후 delivered로 출력
    await manage.methods.updateStatus(accounts[1]).send({from: accounts[0], gas: 122209});
    
    //2번 결과 다시 출력
    manage.methods.getsOrderWithAddr(accounts[1]).call().then(function(value) {console.log("second account's...\n orderNumber:",value[0],"\n product:",value[1],"\n value:",value[2],"\n status:",value[3])});
    
    
}

doIt();
