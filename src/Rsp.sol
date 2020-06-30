pragma solidity 0.5.1;
contract Rsp{
    struct Player {
        string name;
        uint batting;
        uint setRsp;
    }
    int256 result=-1;
    address payable owner;
    address addA;
    address addB;
    uint balance;
    constructor() public {
        owner = msg.sender;
    }
    
    mapping(address=>Player) playerMap;
    mapping(string=>address) addressByName;
    mapping (address => uint) balanceOf;
    
    function setAddressAB(address receiver)public{
        addA=address(this);
        addB=receiver;
    }

    function deposit(uint amount) payable public onlyOwner { 
        require(msg.value == amount);
        balanceOf[addA]+=amount;
        balanceOf[addB]+=amount;
    }
    
    function setA() public{
        uint _rsp= uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%3);
        Player memory m=Player("Player_A",1000,_rsp);
        playerMap[addA]=m;
        addressByName["Player_A"]=addA;
    }
    
    function setB(uint _batting, uint _rsp) public{
        Player memory m2=Player("Player_B",_batting,_rsp);
        playerMap[addB]=m2;
        addressByName["Player_B"]=addB;
    }
    
    function play() public{
        //0:주먹 1:가위: 2:보
        string memory name1="Player_A";
        string memory name2="Player_B";
        Player memory u1=playerMap[addressByName[name1]];
        Player memory u2=playerMap[addressByName[name2]];
        uint a=u1.setRsp;
        uint b=u2.setRsp;
        if(a==b){
            result=0;//tie
        }
        else if((a==0&&b==1)||(a==1&&b==2)||(a==2&&b==0)){
            result=1;//a wins
        }
        else{
            result=2;//b wins
        }
    }
    
    function getMatchResult() public view returns (string memory){
        if(result==1){
            return("A wins");
        }
        else if(result==2){
            return("B wins");
        }
        else{
            return("tie");
        }
    }
    function distributeBetAmount() public payable{
        string memory name1="Player_A";
        string memory name2="Player_B";
        Player memory u1=playerMap[addressByName[name1]];
        Player memory u2=playerMap[addressByName[name2]];
        uint a_batting=u1.batting;
        uint b_batting=u2.batting;
        if(result==1){
            balanceOf[addressByName[name2]]-=b_batting;
            balanceOf[addressByName[name1]]+=b_batting;
        }
        else if(result==2){
            balanceOf[addressByName[name2]]+=a_batting;
            balanceOf[addressByName[name1]]-=a_batting;
        }
    }
    
    function getBalance() public view returns(uint, uint, uint) {
        return ( balanceOf[addA], balanceOf[addB],balanceOf[address(this)]);
    }
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
}
