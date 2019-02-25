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

## References:
* [Managing your accounts](https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts)
* [Management APIs](https://github.com/ethereum/go-ethereum/wiki/Management-APIs)

## Browser-compiler solidity:

[http://remix.ethereum.org/#optimize=true&amp;version=soljson-v0.4.24+commit.e67f0147.js](http://remix.ethereum.org/#optimize=true&amp;version=soljson-v0.4.24+commit.e67f0147.js)

## Hands on

```console
$ # Create a new EOA
$ geth account new 
$ # View all EOA's on your node
$ geth account list
$ # Access geth console
$ geth console
$ # View created accounts
> personal.listAccounts
> ["0x7097419d4b5addf1db3cd92504ab38d2bde53949"]
> # Set the address to which mining rewards will go to
> miner.setEtherbase("0x7097419d4b5addf1db3cd92504ab38d2bde53949")
> # Start, stop mining
> miner.start()
> miner.stop()
> # Wait for the DAG to get generated for the logs to stop
> # View balance
> web3.eth.getBalance("0x7097419d4b5addf1db3cd92504ab38d2bde53949")
> # Unlock account to deploy contracts
> web3.personal.unlockAccount(web3.personal.listAccounts[0],"<password>", 15000)
> # Start rpc listener
> admin.startRPC("0.0.0.0",8545,"*")

```
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

```javascript
var Web3= require('web3')
web3 = new Web3(new Web3.providers.HttpProvide("http://localhost:8545"));
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
