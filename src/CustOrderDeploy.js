var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustOrder.sol:Order"].abi);
var _bin="0x"+_json.contracts["src/CustOrder.sol:Order"].bin;
async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    new web3.eth.Contract(_abiArray).deploy({data: _bin}).estimateGas(function(err, gas) {
        if(!err) console.log("\n########### 1-2 answer ###########\n>> gas: "+ gas+"\n##################################\n");
    });
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 4182981})
        .on('transactionHash', function(hash){
            console.log(">>> transactionHash"+hash);
        })
        .on('receipt', function(receipt){
            console.log(">>> RECEPIT hash: " + receipt.transactionHash + "\n>>> address:" + receipt.contractAddress);
        })
        .on('error', function(error, receipt) {
            console.log(">>> ERROR "+error);
        });
        //.then(function(newContractInstance){
        //    console.log(newContractInstance.options.address)
        //});
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()
