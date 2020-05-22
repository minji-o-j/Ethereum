var Web3=require('web3');
var my = require('./Timer');  //cotaining abi,bin
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
//abi from Timer.js
var _abiArray=JSON.parse(my._compiled.contracts['src/Timer.sol:Timer'].abi);   //JSON parsing needed!!
console.log("- ABI: "+my._compiled.contracts['src/Timer.sol:Timer'].abi);
var timer = new web3.eth.Contract(_abiArray,"0xeC2B36BF618533c120f33E015d4142D9B03fc525");
timer.methods.getNow().call().then(function(value) {console.log(value);});
timer.methods.start().send({from:"0x8e71085ffefccb88a4b54d4c93a866db7928a486",gas:100000});
timer.methods.timePassed().call().then(function(value) {console.log(value);});
