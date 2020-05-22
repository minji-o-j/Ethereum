var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var abi =[{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"subtract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timePassed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var addr = "0x3FA215310652C210aa6b6ade444E6d8A95Ea8258";
var counter = new web3.eth.Contract(abi,addr);

//counter.methods.getCounter().call().then(function(str) {console.log(str);});
counter.methods.start().send({from:"0x8e71085ffefccb88a4b54d4c93a866db7928a486",gas:100000});
counter.methods.add().send({from:"0x8e71085ffefccb88a4b54d4c93a866db7928a486",gas:100000});
counter.methods.add().send({from:"0x8e71085ffefccb88a4b54d4c93a866db7928a486",gas:100000});
counter.methods.add().send({from:"0x8e71085ffefccb88a4b54d4c93a866db7928a486",gas:100000});
counter.methods.getCounter().call().then(function(str) {console.log("counter:",str);});
counter.methods.timePassed().call().then(function(value) {console.log("timePassed:",value);});
