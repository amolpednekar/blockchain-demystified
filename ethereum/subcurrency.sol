pragma solidity ^0.5.0;

contract Coin {
    
    // The 'address' type is a 160-bit value that does not allow any arithmetic operations. 
    // It is suitable for storing addresses of contracts or of keypairs belonging to external persons
    // The keyword "public" makes those variables
    // easily readable from outside.
    address public minter;  

    // maps addresses to unsigned integers
    mapping (address => uint) public balances;

    // Events allow light clients to react to
    // changes efficiently.
    event Sent(address from, address to, uint amount);

    // This is the constructor whose code is
    // run only when the contract is created.
    constructor() public {
        minter = msg.sender;
    }

    function mint(address receiver, uint amount) public {
        require(msg.sender == minter);
        require(amount < 1e60);
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance.");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}