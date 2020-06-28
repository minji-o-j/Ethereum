pragma solidity 0.5.1;
contract BankV3 {
    address owner;
    uint balance;//balance: 여러사람의 잔고 기록할 수 있어야한다. 컨트랙의 잔고 추적 기능
    uint256 timeToDeposit;//시간
    
    event PrintLog(string);
    event Sent(address from, address to, uint amount );
    constructor() public {
        owner = msg.sender;//owner초기화
        balance = 0;
    }

    function() external {
        emit PrintLog("Fallback called");
    }
    function forwardTo(address payable _receiver) public payable onlyOwner {//owner일 경우만 실행
        //require(msg.sender == owner);
        _receiver.transfer(msg.value);
        emit Sent(msg.sender, _receiver, msg.value);//계좌 이체시 sent event 발생
    }
    function getBalance() public view returns(uint, uint) {
        return (balance, address(this).balance);//2개 이상 return시 괄호로 묶어서
    }
    function deposit(uint amount) public payable onlyAfter {//매개변수 없을때: value에 넣는다. 여기서는 amount에 넣음
        timeToDeposit = now + 10 seconds;//10초이후
        require(msg.value == amount);
        balance += amount;
    }
    function withdrawAll() public onlyOwner minBalance {//잔고를 전체 인출, owner만, 최소잔고 있을 때
        balance -= address(this).balance;
        //require(msg.sender == owner);
        msg.sender.transfer(address(this).balance);
    }
    modifier onlyOwner {
        require(msg.sender == owner);//조건 만족할 때만 아래 실행
        _;
    }
    modifier onlyAfter {
        require(now >= timeToDeposit);//조건 만족할 때만 아래 실행
        _;
    }
    modifier minBalance {
        require(address(this).balance>101 wei);//조건 만족할 때만 아래 실행
        _;
    }
}
