var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var _abiArray =[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"bytes2"},{"name":"quantity","type":"uint256"},{"name":"addr","type":"string"}],"name":"order","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_itemId","type":"bytes2"},{"indexed":true,"name":"quantity","type":"uint256"},{"indexed":false,"name":"addr","type":"string"}],"name":"OrderLog","type":"event"}];
var _bin="0x" + "6080604052600a60005534801561001557600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061037e806100666000396000f3fe608060405260043610610046576000357c01000000000000000000000000000000000000000000000000000000009004806312065fe01461004b5780637a59a92914610076575b600080fd5b34801561005757600080fd5b50610060610166565b6040518082815260200191505060405180910390f35b6101646004803603606081101561008c57600080fd5b8101908080357dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919080359060200190929190803590602001906401000000008111156100de57600080fd5b8201836020820111156100f057600080fd5b8035906020019184600183028401116401000000008311171561011257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506101e1565b005b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101c457600080fd5b3073ffffffffffffffffffffffffffffffffffffffff1631905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561034d576000805483029050803414151561024d57600080fd5b823373ffffffffffffffffffffffffffffffffffffffff167f0cee52e22e6b387c4183ee502522fa33f030e118cc6065c7a842e8b7c00e4a6a868560405180837dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200180602001828103825283818151815260200191508051906020019080838360005b838110156103105780820151818401526020810190506102f5565b50505050905090810190601f16801561033d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3505b50505056fea165627a7a72305820560da9061da1af60ca953dbace7d2a064b565d83b411caec5775810088dfa71c0029";

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 2000000}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })

    console.log("---> The contract deployed to: " + deployed.options.address)
}

deploy()
