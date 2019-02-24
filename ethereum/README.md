# Ethereum Guide

## Download pre-requisites

### Geth (Go-Ethereum client): 
[https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu)
```
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```

# Managing accounts:
[https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts](https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts)

```
geth console

# new account
geth account new

geth account list
```

# Test Network tool:
[https://github.com/trufflesuite/ganache-cli](https://github.com/trufflesuite/ganache-cli)

```
sudo npm install -g ganache-cli
```

# Browser-compiler solidity:

[http://remix.ethereum.org/#optimize=true&amp;version=soljson-v0.4.24+commit.e67f0147.js](http://remix.ethereum.org/#optimize=true&amp;version=soljson-v0.4.24+commit.e67f0147.js)


# Sample smart contract:

```js
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
```

## Interact with Smart Contract with javascript

# Install node:

[https://github.com/creationix/nvm](https://github.com/creationix/nvm)
```
nvm install 8.0.0

#Check node and npm  version
node -v
npm -v
```

# Install web3
```
npm install web3@0.20.6
```
[Docs](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethaccounts)


# Sample javascript :

```js
var Web3= require('web3')

  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

console.log(web3.version)

console.log(web3.eth.accounts)

abi= < Add ABI from remix here >


address=<Add Deployed contract address here> ; //'0xe8081a3fc2e0a93c2bbfbb392540e503f56297d3'


// creation of contract object
var myContract = web3.eth.contract(abi).at(address)

//call the getData function our contract
myContract.getData.call(function (err, result) {
if (err) { console.log(err) }
console.log(result);

});



//call the setData function our contract
myContract.setData.sendTransaction(100, { from: web3.eth.accounts[0], gas: 4000000 }, function (error, result) {
if (!error) {
console.log(result);
} else {
console.log(error);
}
})

```
