var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustOrder.json");
var _json=JSON.parse(_str)
//var _abiArray=JSON.parse(_json.contracts.sHello2.abi);
var _abiArray=JSON.parse(_json.contracts["src/CustOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0x5436285D2457553d61838368e248C956aAb73e4a");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    //######################## 1-1 answer ########################
    console.log("######################## 1-1 answer ########################")
    console.log("account[1]: "+accounts[1]+"\nbalance of account[1]: "+await web3.eth.getBalance(accounts[1]));
    console.log("\naccount[2]: "+accounts[2]+"\nbalance of account[2]: "+await web3.eth.getBalance(accounts[2]));
    console.log("\naccount[3]: "+accounts[3]+"\nbalance of account[3]: "+await web3.eth.getBalance(accounts[3])+"\n");
    web3.eth.getBlockNumber(function(error, result){ 
      if (!error)
        console.log("block number: ",result)
    });
    
    //########################## 1-3 answer ########################
    await order.methods.signUp(accounts[1],111,"kim", "010-2017-1111", "111 hongji-dong jongro-gu seoul").send({from: accounts[0], gas: 387502});
    await order.methods.signUp(accounts[2],112, "lee", "010-2017-1112", "112 hongji-dong jongro-gu seoul").send({from: accounts[0], gas: 387502});
    await order.methods.signUp(accounts[3],113, "lim", "010-2017-1113", "113 hongji-dong jongro-gu seoul").send({from: accounts[0], gas: 387502});
    
    
    //######################## 1-4 answer ########################
    console.log("\n\n######################## 1-4 answer ########################");
    
    order.methods.returnHouseAddr(accounts[1]).call().then(function(value) {console.log("account[1]'s house addr: ",value)});
    order.methods.returnHouseAddr(accounts[2]).call().then(function(value) {console.log("account[2]'s house addr: ",value)});
    order.methods.returnHouseAddr(accounts[3]).call().then(function(value) {console.log("account[3]'s house addr: ",value)});

    

    //######################## 1-5 answer ########################
    await order.methods.makeOrder(accounts[1],555, "T-Shirt", 2, 1115).send({from: accounts[0], gas: 5687502, value:1115});
    await order.methods.makeOrder(accounts[2],556, "T-Shirt", 3, 1116).send({from: accounts[0], gas: 5687502, value:1116});
    await order.methods.makeOrder(accounts[3],557, "T-Shirt", 4, 1117).send({from: accounts[0], gas: 5687502, value:1117});
   
    order.methods.printUserByAddress(accounts[1]).call().then(function(value) {console.log("\n\n######################## 1-5 answer ########################",
                                                                                           "\nUserId:",value[0],"\nUserName:",value[1],"\nMileage:",value[4])});
    order.methods.printUserByAddress(accounts[2]).call().then(function(value) {console.log("\nUserId:",value[0],"\nUserName:",value[1],"\nMileage:",value[4])});
    order.methods.printUserByAddress(accounts[3]).call().then(function(value) {console.log("\nUserId:",value[0],"\nUserName:",value[1],"\nMileage:",value[4])});
    
    
    //######################## 1-6 answer ########################
    order.methods.printOrderList().call().then(function(value) {console.log("\n\n######################## 1-6 answer ########################",
                                                                            "\nCounted order time:",value[0],"\nTotal Amount:",value[1],"\nContract balance:",value[2])});

    
    //######################## 1-7 answer ########################
    order.methods.printOrderByAddress(accounts[1]).call().then(function(value) {console.log("\n\n######################## 1-7 answer ########################",
                                                                                            "\nOrder ID:",value[0],"\nProduct:",value[1],"\nOrder amount",value[2],"\nStatus:",value[3],"\nhouse addr:",value[4])});
    order.methods.printOrderByAddress(accounts[2]).call().then(function(value) {console.log("\nOrder ID:",value[0],"\nProduct:",value[1],"\nOrder amount",value[2],"\nStatus:",value[3],"\nhouse addr:",value[4])});
    order.methods.printOrderByAddress(accounts[3]).call().then(function(value) {console.log("\nOrder ID:",value[0],"\nProduct:",value[1],"\nOrder amount",value[2],"\nStatus:",value[3],"\nhouse addr:",value[4])});

    
    //######################## 1-8 answer ########################
    order.methods.printOrderByID(556).call().then(function(value) {console.log("\n\n######################## 1-8 answer ########################",
                                                                                            "\nOrder ID:",value[0],"\nProduct:",value[1],"\nOrder amount",value[2],"\nStatus:",value[3],"\nhouse addr:",value[4])});
    
    //######################## 1-9 answer ########################
    order.methods.checkbalance(accounts[2]).call().then(function(value) {console.log("\n\n######################## 1-9 answer ########################",
                                                                                     "\nbefore refund>> balance of account[2]:",value)});
    await order.methods.refund(556).send({from: accounts[2], gas: 387502});
    order.methods.checkbalance(accounts[2]).call().then(function(value) {console.log("after refund>>  balance of account[2]:",value)});
    
    
    //######################## 1-10 answer ########################
    order.methods.printOrderByID(556).call().then(function(value) {console.log("\n\n######################## 1-10 answer ########################",
                                                                                            "\nOrder ID:",value[0],"\nProduct:",value[1],"\nOrder amount",value[2],"\nStatus:",value[3],"\nhouse addr:",value[4])});
    order.methods.printOrderList().call().then(function(value) {console.log("\n\nCounted order time:",value[0],"\nTotal Amount:",value[1],"\nContract balance:",value[2])});
    order.methods.printUserByAddress(accounts[2]).call().then(function(value) {console.log("\n\n----check account[2]'s mileage\nUserId:",value[0],"\nUserName:",value[1],"\nMileage:",value[4])});
    
    
}

doIt()
