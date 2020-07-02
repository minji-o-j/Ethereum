var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var fs=require('fs');
var _str = fs.readFileSync("src/C1C2.json");
var _json=JSON.parse(_str);
//var _abiArray=JSON.parse(_json.contracts.sHello2.abi);
var _abiArray=JSON.parse(_json.contracts["src/C1C2.sol:C2"].abi);

var c2 = new web3.eth.Contract(_abiArray, "0x6B876B1Ca1B9a427acf6fD72aB017F16dA03371F");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance before: " + balanceBefore);
    c2.methods.get7().call().then(console.log);
    await c2.methods.set(9).send({from: accounts[0],gas:50000});
    c2.methods.get().call().then(console.log);
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance after: " + balanceAfter);
    console.log("Balance diff: " + (balanceBefore - balanceAfter));
    //hello.methods.kill().send({from: accounts[0]})
    process.exit(1)
}

doIt()
