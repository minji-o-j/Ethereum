pragma solidity 0.4.25;
contract Timer {
    uint256 startTime;
    function start() public {
        startTime=now;
    }
    function timePassed() public view returns(uint256) {
        return now-startTime;
    }
    function getNow() view public returns(uint) {
        return now;
    }
}
