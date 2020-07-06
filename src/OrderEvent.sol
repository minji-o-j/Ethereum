pragma solidity 0.5.1;

contract OrderEvent {
    
    uint unitPrice = 10;
    address payable owner;
    //event OrderLog(bytes2 _itemId, uint indexed _value);
    event OrderLog(address indexed _from, bytes2 _itemId, uint indexed quantity, string addr);
    
    constructor() public {
        owner = msg.sender;
    }
    
    function order(bytes2 _itemId, uint quantity,string memory addr) public payable{
        if (msg.sender == owner) {
            uint256 orderAmount = quantity * unitPrice;
            require(msg.value == orderAmount);
            //emit OrderLog(_itemId, msg.value);
            emit OrderLog(msg.sender, _itemId, quantity,addr);
        }
    }
    
    modifier isOwner() { 
        if (msg.sender != owner) {
            revert();
        }
        _; //continue executing rest of method body
    }
    
    function getBalance() view public isOwner returns(uint) {
        return address(this).balance;
    }
}
