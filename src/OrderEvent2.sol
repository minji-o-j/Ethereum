pragma solidity 0.5.1;

contract OrderEvent2 {
    uint unitPrice = 10;
    address payable owner;
    event OrderLog(string);
    event OrderLog(bytes2 _itemId, uint _value);
    event OrderLog(address indexed _from, bytes2 indexed _itemId, uint indexed _value);

    constructor() public {
        owner = msg.sender;
    }
    
    function order(bytes2 _itemId, uint quantity,string memory addr) public payable {
        uint256 orderAmount = quantity * unitPrice;
        require(msg.value == orderAmount);
        emit OrderLog("Ordered");
        emit OrderLog(msg.sender, _itemId, msg.value);
    }
    
    modifier isOwner() { //이 경우만 특정 함수가 실행되게끔, if문 줄어들게 할수있다.
        if (msg.sender != owner) {
            revert();
        }
        _; //continue executing rest of method body
    }
    
    function getBalance() view public isOwner returns(uint) {
        return address(this).balance;
    }
}
