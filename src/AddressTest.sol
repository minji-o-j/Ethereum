pragma solidity 0.5.1;
contract AddressTest {
    address owner;
    address payable receiver;
    uint balanceOfOwner;
    constructor() public {
        owner=msg.sender;
        //myBalance = msg.sender.balance;
        balanceOfOwner = owner.balance;
    }
    function deposit() payable public {
    }
    /* @param addr  set as payable because it will get some gwei*/
    function setReceiver(address payable addr) public {
        receiver=addr;
    }
    function getReceiver() view public returns(address) {
        return receiver; //setReceiver에서 설정했던애
    }
    function getBalanceOfThis() public view returns(uint) {
        return address(this).balance;  //balance of contract
    }
    function getBalanceOfOwner() public view returns(uint) {
        return owner.balance;
    }
    function getBalanceOfReceiver() public view returns(uint) {
        return receiver.balance;
    }
    function send() public payable {
        require(receiver.send(111)); //send 111 gwei to xAddress, send 앞에는 받는계정주소임에 유의
    }
    function transfer() public payable {
        //if !(receiver.transfer(address(this).balance))
        receiver.transfer(11111);//transfer함수는 t/f가 아니라서 require 쓸 수 없다.
    }
    function callValue() public payable {
        receiver.call.value(11111)("");//wei
        receiver.call.gas(10).value(11111)("");//gas를 뒤에 적어줘도 된다.
    }
}
