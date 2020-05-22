var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var shelloContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}]);
shelloContract
    .deploy({
            data: '0x608060405234801561001057600080fd5b5061013f806100206000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063ef5fb05b14610046575b600080fd5b34801561005257600080fd5b5061005b6100d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009b578082015181840152602081019050610080565b50505050905090810190601f1680156100c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60606040805190810160405280600e81526020017f48656c6c6f2c20536e6f776d616e0000000000000000000000000000000000008152509050905600a165627a7a7230582037989dbf63a10ca34219e1c6f713a76f2cec40a1cb520239ae570a7373bf1c150029', 
    })
    .send({
     from: "0x8e71085ffefccb88a4b54d4c93a866db7928a486",
     gas: '3000000'
    }, function (error, transactionHash){ 
            console.log(error, transactionHash); 
    })
    .on('transactionHash', function(error,transactionHash) {
        console.log("hash-- "+transactionHash);
    })
    .on('receipt', function(receipt) {
        console.log('receipt:: '+receipt.contractAddress);
    })
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address)
    });
