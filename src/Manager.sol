pragma solidity 0.5.1;

contract Manager{
    struct OrdersMap{
        uint orderNumber;//주문번호
        string orderProduct;//주문상품
        uint numProduct;//주문개수
        uint256 orderTime;//주문일자
        uint orderBalance; //주문금액
    }
    address payable owner;
    //bidrectional map
    mapping(address=>OrdersMap) memberMap;//key:address, 키를 넣으면 OrdersMap struct이 반환
    mapping(uint=>address) addressByOM;//address by orderNumber, ordernumber이용해서 주소를 구한다.
    mapping (address => string) status;
    mapping (address => uint) balanceOf;
    
    constructor() public {
        owner = msg.sender;
    }
    
    function Order(address user, uint ordernum, string memory product, uint count, uint _cost) public payable {
       OrdersMap memory m=OrdersMap(ordernum, product, count, now, _cost);
       memberMap[user]=m;
       addressByOM[ordernum]=user;
       status[user]="Ordered";
       balanceOf[owner]+=_cost;
    }
    
    
    function updateStatus(address user)public onlyManager returns(string memory) {
        status[user]="Delivered";
        return status[user];
    }
    
    function getsOrderWithAddr(address user) view public returns (uint, string memory, uint, string memory){
        OrdersMap memory u=memberMap[user];
        return(u.orderNumber, u.orderProduct, u.orderBalance, status[user]);
    }
    
    function getOrderWithNum(uint odnum) view public returns (uint, string memory, uint, string memory){
        OrdersMap memory u=memberMap[addressByOM[odnum]];
        return(u.orderNumber, u.orderProduct, u.orderBalance, status[addressByOM[odnum]]);
    }
    
    function getBalance() public view returns(uint) {//잔고 확인, state 읽으니까 view
        return (address(this).balance);
    }
    
    function ownerBalance() public view returns(uint) {//잔고 확인, state 읽으니까 view
        return (balanceOf[owner]);
    }
    
    modifier onlyManager {
        require(msg.sender == owner);
        _;
    }
    
}
