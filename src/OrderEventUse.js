var Web3=require('web3');
var fs=require('fs');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8446"));
}
var _abiArray =[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"bytes2"},{"name":"quantity","type":"uint256"},{"name":"addr","type":"string"}],"name":"order","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_itemId","type":"bytes2"},{"indexed":true,"name":"quantity","type":"uint256"},{"indexed":false,"name":"addr","type":"string"}],"name":"OrderLog","type":"event"}];

async function doIt() {
    var _order = new web3.eth.Contract(_abiArray, '0x9a48Cd64348A4Fe938BFF03E40c28F42d955329e');
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    var event = _order.events.OrderLog({
            filter: {_from: accounts[0]},
            //fromBlock: 'latest', toBlock: 'pending'
        }, function (error, result) {
        if (!error) {
            var log = result.returnValues;
            console.log("Event fired: " + JSON.stringify(log));
            //console.log(Object.keys(log));
            fs.appendFile("src/OrderEvent.txt",log["_from"]+", "+log["_itemId"]+","+log["quantity"]+', '+log["addr"]+"\n" , "utf-8", function(e){
            if(!e) {
                console.log(">> Writing to file");
                
                }
            });
        }
    });
    
    var value;
    my = await _order.methods.order("0x1111", 3, "20 2-gil Hongji-dong Jongro-gu Seoul")
        .send({from: accounts[0], gas: 100000,value:30})
    console.log("---> MyFunction called " + JSON.stringify(my.events.OrderLog.returnValues));
    my = await _order.methods.order("0x1111", 5, "20 2-gil Hongji-dong Jongro-gu Seoul")
        .send({from: accounts[0], gas: 100000,value:50})
    console.log("---> MyFunction called " + JSON.stringify(my.events.OrderLog.returnValues));
    my = await _order.methods.order("0x1111", 20, "20 2-gil Hongji-dong Jongro-gu Seoul")
        .send({from: accounts[0], gas: 100000,value:200})
    console.log("---> MyFunction called " + JSON.stringify(my.events.OrderLog.returnValues));
    process.exit(1);
    
}

doIt();
