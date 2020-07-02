// SPDX-License-Identifier: MIT
pragma solidity 0.6.10;

contract Customer {
    struct userInfo{
        uint userID;
        string userName;
        string phoneNum;
        string userAddr;
        bool isCustomer;
    }
    mapping(address=>userInfo) userMap;
    mapping (address => uint) mileage;
    mapping (address =>uint) balanceOf;
    mapping(uint=>address) addressByID;//ID 이용해서 주소를 구한다.
    address payable owner;
    constructor() public {
        owner = tx.origin;
    }
    function signUp(address addr, uint id, string memory name, string memory phone, string memory home) public {
        if(userMap[addressByID[id]].isCustomer){
            revert("Sorry the account already exist");
        }
        else{
            userInfo memory m=userInfo(id, name, phone, home, true);
            userMap[addr]=m;
            balanceOf[addr]=addr.balance;
            addressByID[id]=addr;
        }
    }
    
    function addMileage(address addr, uint num) public{
        mileage[addr]+=num;
    }
    
    function refundMileage(address addr, uint num) public{
        mileage[addr]-=num;
    }
    
    function withdrawMoney(address addr, uint num)public payable{
        balanceOf[addr]-=num;
    }
    
    function refundMoney(address addr, uint num)public payable{
        balanceOf[addr]+=num;
    }
    
    function printUserByAddress(address addr) view public onlyManager returns(uint,string memory,string memory,string memory,uint){
        userInfo memory u=userMap[addr];
        return (u.userID, u.userName, u.phoneNum, u.userAddr,mileage[addr]);
    }
    
    function returnHouseAddr(address addr) view public onlyManager returns (string memory){
        userInfo memory u=userMap[addr];
        return u.userAddr; 
    }
    
    function checkbalance(address addr) public view returns (uint){
        return balanceOf[addr];
    }
    
    
    modifier onlyManager {
        require(tx.origin == owner);
        _;
    }
    
}

contract Order {
    struct orderInfo{
        uint orderID;
        string productName;
        uint productCount;
        string userAddr;
        uint256 orderTime;
    }
    mapping(address=>orderInfo) orderMap;
    mapping (address => uint) productCost;
    mapping (address => string) status;
    mapping(uint=>address) addressByOrderID;//OrderID 이용해서 주소를 구한다.
    mapping (address => uint) ownerBalance;
    
    address payable owner;
    Customer c;
    uint public orderCount=0;
    constructor() public {
        c = new Customer();
        owner = msg.sender;
    }
    
    
    function signUp(address addr, uint id, string memory name, string memory phone, string memory home) public {
        c.signUp(addr, id, name, phone,home);
    }
    function addMileage(address addr, uint num) public{
        c.addMileage(addr, num);
    }
    function refundMileage(address addr, uint num) public{
        c.refundMileage(addr, num);
    }
    
    function withdrawMoney(address addr, uint num)public payable{
        c.withdrawMoney(addr, num);
    }
    
    function refundMoney(address addr, uint num)public payable{
        c.refundMoney(addr, num);
    }
    
    function printUserByAddress(address addr) view public returns(uint,string memory,string memory,string memory,uint){
        return c.printUserByAddress(addr); 
    }
    
    function returnHouseAddr(address addr) view public returns (string memory){
        return c.returnHouseAddr(addr); 
    }
    
    function makeOrder(address addr, uint id, string memory pdname, uint pdcount, uint pdcost) payable public {
        orderInfo memory m=orderInfo(id, pdname, pdcount, returnHouseAddr(addr),now);
        orderMap[addr]=m;
        addressByOrderID[id]=addr;
        productCost[addr]=pdcost;
        
        
        addMileage(addr,pdcost/100);//마일리지 증가
        status[addr]="Ordered";
        orderCount+=1;//주문 개수 증가
        
        require(msg.value == pdcost);
        withdrawMoney(addr, pdcost);
        ownerBalance[owner]+=pdcost;//전체 금액 합계
        
    }
    
    function printOrderByAddress(address addr) view public onlyManager returns(uint,string memory,uint,string memory, string memory){
        orderInfo memory u=orderMap[addr];
        return(u.orderID,u.productName,productCost[addr],status[addr],returnHouseAddr(addr));
    }
    function printOrderByID(uint _id) view public onlyManager returns(uint,string memory,uint,string memory, string memory){
        orderInfo memory u=orderMap[addressByOrderID[_id]];
        return(u.orderID,u.productName,productCost[addressByOrderID[_id]],status[addressByOrderID[_id]],returnHouseAddr(addressByOrderID[_id]));
    }
    
    function printOrderList() public view returns(uint, uint, uint){
        return(orderCount, ownerBalance[owner], checkContractBalance());
    }
    
    function refund(uint _id) public {
        require(addressByOrderID[_id]==msg.sender);
        status[addressByOrderID[_id]]="Refunded";
        refundMileage(addressByOrderID[_id],productCost[addressByOrderID[_id]]/100);
        refundMoney(addressByOrderID[_id],productCost[addressByOrderID[_id]]);
        ownerBalance[owner]-=productCost[addressByOrderID[_id]];
        owner.transfer( productCost[addressByOrderID[_id]]);
        productCost[addressByOrderID[_id]]=0;
        orderCount-=1;
        
    }
    
    function checkbalance(address addr) public view  returns (uint){
        return c.checkbalance(addr);
    }
    
    function checkOwnerBalance() view public onlyManager returns(uint){
        return ownerBalance[owner];
    }
    
    function checkContractBalance()view public onlyManager returns(uint){
        return address(this).balance;
    }
    modifier onlyManager {
        require(msg.sender == owner);
        _;
    }

    
}
