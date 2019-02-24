pragma solidity ^0.4.22;

contract Simple
{
    
    uint a;
    
    constructor () public {
        a=10;
    }
    
    function  getData() public constant returns(uint)
    {
        return a;
        
    }
    
    
    function setData(uint x) public returns(bool)
    {
        a=x;
        
    }
    
    
}
