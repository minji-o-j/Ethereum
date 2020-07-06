var Web3=require('web3');
var fs=require('fs');
var web3 = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8345"));
var _abiArray  =[{"constant":false,"inputs":[],"name":"myFunction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"my","type":"string"}],"name":"MyLog","type":"event"}];

var _test = new web3.eth.Contract(_abiArray, '0x55cDDaC70da0930fB989a02904e26DedB3264548');
var event = _test.events.MyLog({fromBlock: 0}, function (error, result) {
    if (!error) {
        log = JSON.stringify(result.returnValues);
        console.log("Event fired: " + log);
        fs.appendFile("src/OrderEvent.txt", log, "utf-8", function(e) {
            if(!e) {
                console.log(">> Writing to file");
            }
        //process.exit(1);
        });
    }
});

async function doIt() {    
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance before: " + balanceBefore);
    const value = await _test.methods.myFunction()
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
        //.then(function(value) {console.log("---> myFunction called " + JSON.stringify(value.events.MyLog.returnValues));});
    console.log("---> myFunction called " + JSON.stringify(value.events.MyLog.returnValues));
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance after: " + balanceAfter);
    console.log("Balance diff: " + (balanceBefore - balanceAfter));
    process.exit(1);
}

doIt()
