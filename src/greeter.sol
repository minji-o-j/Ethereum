pragma solidity 0.4.25;

contract Greeter{
    string greeting;
    constructor() public {
        greeting='Hello';
    }
    
    function setGreeting(string memory _greeting) public{
        greeting=_greeting;
    }
    function greet() view public returns (string memory){
        return greeting;
    }
}
