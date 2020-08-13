# Ethreum, Solidity

![image](https://img.shields.io/github/issues/minji-o-j/Ethereum?color=0088ff&style=flat-square)

- Ethereum version
  - 0.4.25
  - 0.5.1
  - 0.6.10(final exam)
    - 컨트랙 결합 사용시 0.5대에서는 작동 안되어서 0.6.10으로 버전 upgrade를 진행하였다.

---
## 강의자료
- https://github.com/smu405/e
---
## 참고사항
- gas를 줄일수 있으면 줄이는 것이 좋다!
- 반복문이나 연산을 많이하면 gas 비용이 많이 발생
- 오류의 절반은 버전 문제인 경우가 많다..
---
## 자주 사용하는 명령어
#### geth 접속하기 (cmd)
```py
_gethNow.bat
```

#### geth 콘솔 열기(새로운 cmd), geth 접속한 상태로 해야함
```py
geth attach http://localhost:8445
```

#### 계정 확인하기 (geth 콘솔)
```py
eth.accounts
```

#### 계정 확인하기 (jupyter notebook)
```py
!geth -exec eth.accounts attach http://localhost:8445
```

#### 잔액 확인하기 (geth 콘솔)
```py
eth.getBalance(eth.accounts[0]);
```

#### 충전하기 (mining) (geth 콘솔)
```py
miner.start()
miner.stop()
```

#### 트랜잭션 확인 (geth 콘솔)
```py
eth.pendingTransactions
```

#### authentication 오류 뜰 때 (geth 콘솔)
```py
personal.unlockAccount(eth.coinbase); #하고 비밀번호 입력
``` 

#### mining 하기(pending 해소) (geth 콘솔)
```py
miner.start(1);admin.sleepBlocks(1);miner.stop();
#sleepBlocks(숫자)를 조절해준다.
```

#### 가나슈(ganache) 실행하기 (새로운 cmd)
```py
node_modules.bin\ganache-cli.cmd -p 8345
```

#### .js 파일 node로 실행하기 (새로운 cmd)
```py
C:\Users\minji\Code\201810808>node src/OrderEventUse.js
# 학번경로 폴더에서

node js파일주소

# 이렇게 입력한다.
```
---
## 겪었던 오류와 해결법
- [해결한 오류](https://github.com/minji-o-j/Ethereum/issues?q=is%3Aissue+is%3Aclosed)
- [해결 못한 오류](https://github.com/minji-o-j/Ethereum/issues?q=is%3Aopen+is%3Aissue)
---
## 해결한 오류
### UnhandledPromiseRejectionWarning
- Returned error: VM Exception while processing transaction: out of gas
  - [Link](https://github.com/minji-o-j/Ethereum/issues/4)
- The contract code couldn't be stored, please check your gas limit.
  - [Link](https://github.com/minji-o-j/Ethereum/issues/5)  
- Returned error: intrinsic gas too low at Object.ErrorResponse
  - [Link](https://github.com/minji-o-j/Ethereum/issues/7)  
- Invalid JSON RPC response: "" at Object.InvalidResponse 
  - [Link](https://github.com/minji-o-j/Ethereum/issues/9)
- connection not open on send()
  - [Link](https://github.com/minji-o-j/Ethereum/issues/14)
- Returned values aren't valid, did it run Out of Gas?
  - [Link](https://github.com/minji-o-j/Ethereum/issues/16)

### ParserError
- Expected identifier but got '(' fallback () external { ^
  - [Link](https://github.com/minji-o-j/Ethereum/issues/12)
  
### TypeError
- Indexed expression has to be a type, mapping or array (is tuple(uint256,uint256))
  - [Link](https://github.com/minji-o-j/Ethereum/issues/1)
- myBank.methods.getBalance(...).call.then is not a function
  - [Link](https://github.com/minji-o-j/Ethereum/issues/6)
  
---
## 해결 못한 오류
### ParserError
- Expected primary expression. 
  - [Link](https://github.com/minji-o-j/Ethereum/issues/18)
### 기타 Error
- Provided address "undefined" is invalid, the capitalization checksum test failed, or its an indrect IBAN address which can't be converted. 
  - [Link](https://github.com/minji-o-j/Ethereum/issues/8)
