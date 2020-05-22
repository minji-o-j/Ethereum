const my = require('./Timer'); //현재 디렉토리의 타이머 입력
console.log("- compiled results: " +my);
console.log("- ABI: "+my._compiled.contracts['src/Timer.sol:Timer'].abi);
console.log("- Bytecode: "+my._compiled.contracts['src/Timer.sol:Timer'].bin);
