pragma solidity 0.4.25;
contract counterNtimer {
    
    uint256 startTime;
    uint256 counter = 0;
    function start() public {
        startTime=now;
    }
    function timePassed() public view returns(uint256) {
        return now-startTime;
    }
    function getNow() view public returns(uint) {
        return now;
    }
    
    function add() public {
        counter++;
    }
    function subtract() public {
        counter--;
    }
    function getCounter() public view returns (uint256) {
        return counter;
    }
}
