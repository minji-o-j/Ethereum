pragma solidity 0.5.1;
contract Multiply7Event {
    event Print(address param1,uint256 param2,uint param3);
    function multiply(uint param4) public{
        emit Print(msg.sender,now,param4*7);
    }
}
