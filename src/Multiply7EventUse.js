var Web3=require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8446"));
var _abiArray = [{"constant":false,"inputs":[{"name":"param4","type":"uint256"}],"name":"multiply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"param1","type":"address"},{"indexed":false,"name":"param2","type":"uint256"},{"indexed":false,"name":"param3","type":"uint256"}],"name":"Print","type":"event"}];
var _test = new web3.eth.Contract(_abiArray, '0xd3685D3bae5ed73249146c6F4292bFad74784938');
var event = _test.events.Print({fromBlock: 0}, function (error, result) {
    if (!error) {
        console.log("Event fired: " + JSON.stringify(result) + "\n---> " + JSON.stringify(result.returnValues));
    }
});

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    //console.log("Account: " + accounts[0]);
    const value = await _test.methods.multiply(8)
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
    console.log(value.events.Print.returnValues);
    console.log("\n-------------------------answer-------------------------");
    console.log("address:",value.events.Print.returnValues[0]);
    console.log("timestamp:",value.events.Print.returnValues[1]);
    console.log("result:",value.events.Print.returnValues[2]);
    console.log("--------------------------------------------------------\n");
    
    const value2 = await _test.methods.multiply(16)
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
    console.log(value2.events.Print.returnValues);
    console.log("\n-------------------------answer-------------------------");
    console.log("address:",value2.events.Print.returnValues[0]);
    console.log("timestamp:",value2.events.Print.returnValues[1]);
    console.log("result:",value2.events.Print.returnValues[2]);
    console.log("--------------------------------------------------------\n");
    process.exit(1);
}
doIt()
