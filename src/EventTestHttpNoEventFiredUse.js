var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
//http provider로하면 안된다

var _abiArray=[{"constant":false,"inputs":[],"name":"myFunction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"my","type":"string"}],"name":"MyLog","type":"event"}];
var _test = new web3.eth.Contract(_abiArray, '0x2686F350Ee220C5Bce19aDB0B02A55E47633f53d');
var event = _test.events.MyLog({fromBlock: 0}, function (error, result) {
    if (!error) {
        console.log("Event fired: " + JSON.stringify(result) + "\n---> " + JSON.stringify(result.returnValues));
    }
});

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance before: " + balanceBefore);
    const value = await _test.methods.myFunction()
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
        //.then(function(value) {console.log("---> myFunction called "+JSON.stringify(value)+
        //                               '\n---> '+ JSON.stringify(value.events.MyLog.returnValues));});
    console.log("---> myFunction called "+JSON.stringify(value)+
        '\n---> '+ JSON.stringify(value.events.MyLog.returnValues));
    
    
    console.log("print only string: ",value.events.MyLog.returnValues[0]);
    
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance after: " + balanceAfter);
    console.log("Balance diff: " + (balanceBefore - balanceAfter));
}
doIt()
