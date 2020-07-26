# Ethreum, Solidity

<img alt="Issues" src="https://img.shields.io/github/issues/minji-o-j/Ethereum?color=0088ff" />   

- Ethereum version: 0.4.25, 0.5.1, 0.6.13(?_확인후수정_)(final exam)

---
## 강의자료
- https://github.com/smu405/e
---

## .
- gas를 줄일수 있으면 줄이는 것이 좋다!
- 반복문이나 연산을 많이하면 gas 비용이 많이 발생

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
