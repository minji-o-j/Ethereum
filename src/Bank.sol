pragma solidity 0.5.1;
contract Bank {
    
    address payable myAddr1;
    address payable myAddr2;
    uint balance;
    uint balNow;
    uint init1;
    uint init2;
    
    constructor() public {
        balance = address(this).balance;
    }
    
    function setAddr1(address payable addr1) public {
        myAddr1=addr1;
    }
    
    function setAddr2(address payable addr2) public {
        myAddr2=addr2;
    }
    
    function deposit(uint amount) public payable{
        require(msg.value == amount); //require: 예외발생구문
        balance += amount;
    }
    
    function widthdrawAll() public{
        balNow=address(this).balance;
        balance -= balNow;
        require(myAddr1.transfer(balNow));
    }
    
    function getBalance() public view returns(uint, uint){
        return (address(this).balance,balance); 
    }
    
  
    function forwardTo(address payable _receiver) public payable{
        balance -= 333;
        require(_receiver.send(333));
    }
    
    function balanceOfAccount1() public view returns (uint) {
        return myAddr1.balance;
    }
    
    function balanceOfAccount2() public view returns (uint) {
        return myAddr2.balance;
    }
    
    function setInit1() public {
        init1=myAddr1.balance;
    }
    
    function subtract1() public view returns (uint) {
        return myAddr1.balance-init1;
    }
    
    function setInit2() public {
        init2=myAddr2.balance;
    }
    
    function subtract2() public view returns (uint) {
        return myAddr2.balance-init2;
    }
    
}
